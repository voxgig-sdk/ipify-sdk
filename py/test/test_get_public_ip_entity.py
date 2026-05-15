# GetPublicIp entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from ipify_sdk import IpifySDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestGetPublicIpEntity:

    def test_should_create_instance(self):
        testsdk = IpifySDK.test(None, None)
        ent = testsdk.GetPublicIp(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _get_public_ip_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "get_public_ip." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set IPIFY_TEST_GET_PUBLIC_IP_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        get_public_ip_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.get_public_ip")))
        get_public_ip_ref01_data = None
        if len(get_public_ip_ref01_data_raw) > 0:
            get_public_ip_ref01_data = helpers.to_map(get_public_ip_ref01_data_raw[0][1])

        # LOAD
        get_public_ip_ref01_ent = client.GetPublicIp(None)
        get_public_ip_ref01_match_dt0 = {}
        get_public_ip_ref01_data_dt0_loaded, err = get_public_ip_ref01_ent.load(get_public_ip_ref01_match_dt0, None)
        assert err is None
        assert get_public_ip_ref01_data_dt0_loaded is not None



def _get_public_ip_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/get_public_ip/GetPublicIpTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IpifySDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["get_public_ip01", "get_public_ip02", "get_public_ip03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "IPIFY_TEST_GET_PUBLIC_IP_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "IPIFY_TEST_GET_PUBLIC_IP_ENTID": idmap,
        "IPIFY_TEST_LIVE": "FALSE",
        "IPIFY_TEST_EXPLAIN": "FALSE",
        "IPIFY_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("IPIFY_TEST_GET_PUBLIC_IP_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("IPIFY_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("IPIFY_APIKEY"),
            },
            extra or {},
        ])
        client = IpifySDK(helpers.to_map(merged_opts))

    _live = env.get("IPIFY_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("IPIFY_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

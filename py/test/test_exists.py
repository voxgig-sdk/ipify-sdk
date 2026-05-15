# ProjectName SDK exists test

import pytest
from ipify_sdk import IpifySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpifySDK.test(None, None)
        assert testsdk is not None

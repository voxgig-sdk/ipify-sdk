

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpifySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetPublicIpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IPIFY_TEST_LIVE=TRUE.
  afterEach(liveDelay('IPIFY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpifySDK.test()
    const ent = testsdk.GetPublicIp()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IPIFY_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_public_ip.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ip","req":true,"short":"The public IP address of the requester.","type":"`$STRING`","index$":0}],"name":"get_public_ip","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"callback","kind":"query","name":"callback","orig":"callback","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getPublicIp\",\"parameters\":[{\"description\":\"The response format. If not specified, returns plain text.\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"enum\":[\"json\",\"jsonp\"],\"type\":\"string\"}},{\"description\":\"The callback function name for JSONP responses. Only applicable when format=jsonp. Defaults to 'callback' if not specified.\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"default\":\"callback\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/javascript\":{\"examples\":{\"custom\":{\"summary\":\"JSONP with custom callback\",\"value\":\"getip({\\\"ip\\\":\\\"98.207.254.136\\\"});\"},\"default\":{\"summary\":\"JSONP with default callback\",\"value\":\"callback({\\\"ip\\\":\\\"98.207.254.136\\\"});\"}},\"schema\":{\"example\":\"callback({\\\"ip\\\":\\\"98.207.254.136\\\"});\",\"type\":\"string\"}},\"application/json\":{\"examples\":{\"ipv4\":{\"summary\":\"IPv4 address in JSON\",\"value\":{\"ip\":\"98.207.254.136\"}},\"ipv6\":{\"summary\":\"IPv6 address in JSON\",\"value\":{\"ip\":\"2a00:1450:400f:80d::200e\"}}},\"schema\":{\"properties\":{\"ip\":{\"description\":\"The public IP address of the requester. Can be either IPv4 or IPv6 format depending on the endpoint used.\",\"example\":\"98.207.254.136\",\"type\":\"string\"}},\"required\":[\"ip\"],\"type\":\"object\"}},\"text/plain\":{\"examples\":{\"ipv4\":{\"summary\":\"IPv4 address\",\"value\":\"98.207.254.136\"},\"ipv6\":{\"summary\":\"IPv6 address\",\"value\":\"2a00:1450:400f:80d::200e\"}},\"schema\":{\"example\":\"98.207.254.136\",\"type\":\"string\"}}},\"description\":\"Successfully retrieved public IP address\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["callback","format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_public_ip","name__orig":"get_public_ip","Name":"GetPublicIp","name_":"get_public_ip","name-":"get-public-ip","NAME":"GET_PUBLIC_IP","index$":0}, {"active":true,"entity":"get_public_ip","key$":"BasicGetPublicIpFlow","kind":"basic","name":"BasicGetPublicIpFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_public_ip_ref01","srcdatavar":"get_public_ip_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_public_ip_ref01"}}],"index$":0}]}, 'GetPublicIp')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_public_ip_ref01_data = Object.values(setup.data.existing.get_public_ip)[0] as any

    // LOAD
    const get_public_ip_ref01_ent = client.GetPublicIp()
    const get_public_ip_ref01_match_dt0: any = {}
    const get_public_ip_ref01_data_dt0 = (await get_public_ip_ref01_ent.load(get_public_ip_ref01_match_dt0)).data()
    assert(null != get_public_ip_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_public_ip/GetPublicIpTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpifySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_public_ip01','get_public_ip02','get_public_ip03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IPIFY_TEST_GET_PUBLIC_IP_ENTID': idmap,
    'IPIFY_TEST_LIVE': 'FALSE',
    'IPIFY_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IPIFY_TEST_GET_PUBLIC_IP_ENTID']

  const live = 'TRUE' === env.IPIFY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IPIFY_TEST_GET_PUBLIC_IP_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpifySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IPIFY_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

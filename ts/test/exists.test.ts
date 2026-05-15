
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpifySDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpifySDK.test()
    equal(null !== testsdk, true)
  })

})

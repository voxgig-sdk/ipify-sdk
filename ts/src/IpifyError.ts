
import { Context } from './Context'


class IpifyError extends Error {

  isIpifyError = true

  sdk = 'Ipify'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpifyError
}


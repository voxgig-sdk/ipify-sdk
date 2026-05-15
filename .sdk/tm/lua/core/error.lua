-- Ipify SDK error

local IpifyError = {}
IpifyError.__index = IpifyError


function IpifyError.new(code, msg, ctx)
  local self = setmetatable({}, IpifyError)
  self.is_sdk_error = true
  self.sdk = "Ipify"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpifyError:error()
  return self.msg
end


function IpifyError:__tostring()
  return self.msg
end


return IpifyError

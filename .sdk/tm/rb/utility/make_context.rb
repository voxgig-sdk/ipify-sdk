# Ipify SDK utility: make_context
require_relative '../core/context'
module IpifyUtilities
  MakeContext = ->(ctxmap, basectx) {
    IpifyContext.new(ctxmap, basectx)
  }
end

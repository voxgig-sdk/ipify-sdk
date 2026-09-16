# Ipify SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpifyFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpifyBaseFeature.new
    when "ratelimit"
      IpifyRatelimitFeature.new
    when "retry"
      IpifyRetryFeature.new
    when "test"
      IpifyTestFeature.new
    when "timeout"
      IpifyTimeoutFeature.new
    else
      IpifyBaseFeature.new
    end
  end
end

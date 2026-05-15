# Ipify SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpifyFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpifyBaseFeature.new
    when "test"
      IpifyTestFeature.new
    else
      IpifyBaseFeature.new
    end
  end
end

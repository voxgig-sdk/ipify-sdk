# Ipify SDK exists test

require "minitest/autorun"
require_relative "../Ipify_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpifySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

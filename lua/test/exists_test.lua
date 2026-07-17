-- Ipify SDK exists test

local sdk = require("ipify_sdk")

describe("IpifySDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

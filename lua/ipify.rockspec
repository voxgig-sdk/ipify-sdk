package = "voxgig-sdk-ipify"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ipify-sdk.git"
}
description = {
  summary = "Ipify SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ipify_sdk"] = "ipify_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

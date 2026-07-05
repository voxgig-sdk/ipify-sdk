# frozen_string_literal: true

# Typed models for the Ipify SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetPublicIp entity data model.
#
# @!attribute [rw] ip
#   @return [String]
GetPublicIp = Struct.new(
  :ip,
  keyword_init: true
)

# Request payload for GetPublicIp#load.
#
# @!attribute [rw] ip
#   @return [String, nil]
GetPublicIpLoadMatch = Struct.new(
  :ip,
  keyword_init: true
)


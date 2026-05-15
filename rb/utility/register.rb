# Ipify SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpifyUtility.registrar = ->(u) {
  u.clean = IpifyUtilities::Clean
  u.done = IpifyUtilities::Done
  u.make_error = IpifyUtilities::MakeError
  u.feature_add = IpifyUtilities::FeatureAdd
  u.feature_hook = IpifyUtilities::FeatureHook
  u.feature_init = IpifyUtilities::FeatureInit
  u.fetcher = IpifyUtilities::Fetcher
  u.make_fetch_def = IpifyUtilities::MakeFetchDef
  u.make_context = IpifyUtilities::MakeContext
  u.make_options = IpifyUtilities::MakeOptions
  u.make_request = IpifyUtilities::MakeRequest
  u.make_response = IpifyUtilities::MakeResponse
  u.make_result = IpifyUtilities::MakeResult
  u.make_point = IpifyUtilities::MakePoint
  u.make_spec = IpifyUtilities::MakeSpec
  u.make_url = IpifyUtilities::MakeUrl
  u.param = IpifyUtilities::Param
  u.prepare_auth = IpifyUtilities::PrepareAuth
  u.prepare_body = IpifyUtilities::PrepareBody
  u.prepare_headers = IpifyUtilities::PrepareHeaders
  u.prepare_method = IpifyUtilities::PrepareMethod
  u.prepare_params = IpifyUtilities::PrepareParams
  u.prepare_path = IpifyUtilities::PreparePath
  u.prepare_query = IpifyUtilities::PrepareQuery
  u.result_basic = IpifyUtilities::ResultBasic
  u.result_body = IpifyUtilities::ResultBody
  u.result_headers = IpifyUtilities::ResultHeaders
  u.transform_request = IpifyUtilities::TransformRequest
  u.transform_response = IpifyUtilities::TransformResponse
}

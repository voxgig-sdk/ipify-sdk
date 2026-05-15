<?php
declare(strict_types=1);

// Ipify SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpifyUtility::setRegistrar(function (IpifyUtility $u): void {
    $u->clean = [IpifyClean::class, 'call'];
    $u->done = [IpifyDone::class, 'call'];
    $u->make_error = [IpifyMakeError::class, 'call'];
    $u->feature_add = [IpifyFeatureAdd::class, 'call'];
    $u->feature_hook = [IpifyFeatureHook::class, 'call'];
    $u->feature_init = [IpifyFeatureInit::class, 'call'];
    $u->fetcher = [IpifyFetcher::class, 'call'];
    $u->make_fetch_def = [IpifyMakeFetchDef::class, 'call'];
    $u->make_context = [IpifyMakeContext::class, 'call'];
    $u->make_options = [IpifyMakeOptions::class, 'call'];
    $u->make_request = [IpifyMakeRequest::class, 'call'];
    $u->make_response = [IpifyMakeResponse::class, 'call'];
    $u->make_result = [IpifyMakeResult::class, 'call'];
    $u->make_point = [IpifyMakePoint::class, 'call'];
    $u->make_spec = [IpifyMakeSpec::class, 'call'];
    $u->make_url = [IpifyMakeUrl::class, 'call'];
    $u->param = [IpifyParam::class, 'call'];
    $u->prepare_auth = [IpifyPrepareAuth::class, 'call'];
    $u->prepare_body = [IpifyPrepareBody::class, 'call'];
    $u->prepare_headers = [IpifyPrepareHeaders::class, 'call'];
    $u->prepare_method = [IpifyPrepareMethod::class, 'call'];
    $u->prepare_params = [IpifyPrepareParams::class, 'call'];
    $u->prepare_path = [IpifyPreparePath::class, 'call'];
    $u->prepare_query = [IpifyPrepareQuery::class, 'call'];
    $u->result_basic = [IpifyResultBasic::class, 'call'];
    $u->result_body = [IpifyResultBody::class, 'call'];
    $u->result_headers = [IpifyResultHeaders::class, 'call'];
    $u->transform_request = [IpifyTransformRequest::class, 'call'];
    $u->transform_response = [IpifyTransformResponse::class, 'call'];
});

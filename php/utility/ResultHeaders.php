<?php
declare(strict_types=1);

// Ipify SDK utility: result_headers

class IpifyResultHeaders
{
    public static function call(IpifyContext $ctx): ?IpifyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

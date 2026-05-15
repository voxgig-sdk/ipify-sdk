<?php
declare(strict_types=1);

// Ipify SDK utility: result_body

class IpifyResultBody
{
    public static function call(IpifyContext $ctx): ?IpifyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

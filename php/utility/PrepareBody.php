<?php
declare(strict_types=1);

// Ipify SDK utility: prepare_body

class IpifyPrepareBody
{
    public static function call(IpifyContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

<?php
declare(strict_types=1);

// Ipify SDK utility: feature_add

class IpifyFeatureAdd
{
    public static function call(IpifyContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

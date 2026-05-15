<?php
declare(strict_types=1);

// Ipify SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpifyMakeContext
{
    public static function call(array $ctxmap, ?IpifyContext $basectx): IpifyContext
    {
        return new IpifyContext($ctxmap, $basectx);
    }
}

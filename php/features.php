<?php
declare(strict_types=1);

// Ipify SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpifyFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpifyBaseFeature();
            case "test":
                return new IpifyTestFeature();
            default:
                return new IpifyBaseFeature();
        }
    }
}

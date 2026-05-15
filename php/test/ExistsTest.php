<?php
declare(strict_types=1);

// Ipify SDK exists test

require_once __DIR__ . '/../ipify_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = IpifySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

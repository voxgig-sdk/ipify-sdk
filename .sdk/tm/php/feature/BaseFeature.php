<?php
declare(strict_types=1);

// Ipify SDK base feature

class IpifyBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpifyContext $ctx, array $options): void {}
    public function PostConstruct(IpifyContext $ctx): void {}
    public function PostConstructEntity(IpifyContext $ctx): void {}
    public function SetData(IpifyContext $ctx): void {}
    public function GetData(IpifyContext $ctx): void {}
    public function GetMatch(IpifyContext $ctx): void {}
    public function SetMatch(IpifyContext $ctx): void {}
    public function PrePoint(IpifyContext $ctx): void {}
    public function PreSpec(IpifyContext $ctx): void {}
    public function PreRequest(IpifyContext $ctx): void {}
    public function PreResponse(IpifyContext $ctx): void {}
    public function PreResult(IpifyContext $ctx): void {}
    public function PreDone(IpifyContext $ctx): void {}
    public function PreUnexpected(IpifyContext $ctx): void {}
}

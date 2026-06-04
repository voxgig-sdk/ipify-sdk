# Ipify SDK

Look up your public IP address over a tiny, no-auth HTTP endpoint with IPv4, IPv6, and JSON/JSONP output

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ipify API

[ipify](https://www.ipify.org/) is a small, free public IP address lookup API created and maintained by [Randall Degges](https://www.rdegges.com/). The service has a single job: tell the caller what public IP address the request came from. It runs without authentication, without registration, and without logging visitor information.

What you get from the API:

- The caller's public IPv4 address via `https://api.ipify.org`
- The caller's public IPv6 address via `https://api6.ipify.org`
- A dual-stack endpoint that returns whichever protocol the connection used via `https://api64.ipify.org`
- Response formats selectable via a `format` query parameter: plain text (default), `json`, or `jsonp` (with a customizable `callback` parameter)

The project advertises no rate limit and is intended to be embedded in client and server applications that need to discover their own external IP. Note that community catalogue checks report CORS is disabled on the endpoints, so browser-side use generally relies on the JSONP format.

## Try it

**TypeScript**
```bash
npm install ipify
```

**Python**
```bash
pip install ipify-sdk
```

**PHP**
```bash
composer require voxgig/ipify-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ipify-sdk/go
```

**Ruby**
```bash
gem install ipify-sdk
```

**Lua**
```bash
luarocks install ipify-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpifySDK } from 'ipify'

const client = new IpifySDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ipify-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ipify": {
      "command": "/abs/path/to/ipify-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetPublicIp** | Returns the caller's public IP address from `https://api.ipify.org` (IPv4), `https://api6.ipify.org` (IPv6), or `https://api64.ipify.org` (dual-stack), with `?format=json` or `?format=jsonp&callback=...` for structured output. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipify_sdk import IpifySDK

client = IpifySDK({})


# Load a specific getpublicip
getpublicip, err = client.GetPublicIp(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipify_sdk.php';

$client = new IpifySDK([]);


// Load a specific getpublicip
[$getpublicip, $err] = $client->GetPublicIp(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ipify-sdk/go"

client := sdk.NewIpifySDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Ipify_sdk"

client = IpifySDK.new({})


# Load a specific getpublicip
getpublicip, err = client.GetPublicIp(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ipify_sdk")

local client = sdk.new({})


-- Load a specific getpublicip
local getpublicip, err = client:GetPublicIp(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpifySDK.test()
const result = await client.GetPublicIp().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpifySDK.test(None, None)
result, err = client.GetPublicIp(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpifySDK::test(null, null);
[$result, $err] = $client->GetPublicIp(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetPublicIp(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpifySDK.test(nil, nil)
result, err = client.GetPublicIp(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetPublicIp(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the ipify API

- Upstream: [https://www.ipify.org/](https://www.ipify.org/)

- ipify is open source and free to use for any purpose.
- No API key, sign-up, or attribution is required.
- The maintainers state the service does not log visitor information.
- Operated as a community project; no SLA is offered.

---

Generated from the ipify API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

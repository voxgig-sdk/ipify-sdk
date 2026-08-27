# Ipify SDK configuration

module IpifyConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Ipify",
        "slug" => "ipify",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.ipify.org",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_public_ip" => {},
        },
      },
      "entity" => {
        "get_public_ip" => {
          "fields" => [
            {
              "name" => "ip",
              "req" => true,
              "short" => "The public IP address of the requester.",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_public_ip",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "callback",
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "callback",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpifyFeatures.make_feature(name)
  end
end

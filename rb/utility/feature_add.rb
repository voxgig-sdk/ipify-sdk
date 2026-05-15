# Ipify SDK utility: feature_add
module IpifyUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

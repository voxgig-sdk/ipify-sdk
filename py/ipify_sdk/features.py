# Ipify SDK feature factory

from ipify_sdk.feature.base_feature import IpifyBaseFeature
from ipify_sdk.feature.ratelimit_feature import IpifyRatelimitFeature
from ipify_sdk.feature.retry_feature import IpifyRetryFeature
from ipify_sdk.feature.test_feature import IpifyTestFeature
from ipify_sdk.feature.timeout_feature import IpifyTimeoutFeature


_FEATURES = {
    "base": lambda: IpifyBaseFeature(),
    "ratelimit": lambda: IpifyRatelimitFeature(),
    "retry": lambda: IpifyRetryFeature(),
    "test": lambda: IpifyTestFeature(),
    "timeout": lambda: IpifyTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

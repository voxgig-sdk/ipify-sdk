# Ipify SDK feature factory

from feature.base_feature import IpifyBaseFeature
from feature.test_feature import IpifyTestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpifyBaseFeature(),
        "test": lambda: IpifyTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

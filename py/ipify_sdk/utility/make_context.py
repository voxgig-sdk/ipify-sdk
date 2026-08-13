# Ipify SDK utility: make_context

from ipify_sdk.core.context import IpifyContext


def make_context_util(ctxmap, basectx):
    return IpifyContext(ctxmap, basectx)

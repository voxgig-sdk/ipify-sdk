# Ipify SDK utility: make_context

from core.context import IpifyContext


def make_context_util(ctxmap, basectx):
    return IpifyContext(ctxmap, basectx)

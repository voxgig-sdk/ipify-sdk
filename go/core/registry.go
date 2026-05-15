package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetPublicIpEntityFunc func(client *IpifySDK, entopts map[string]any) IpifyEntity


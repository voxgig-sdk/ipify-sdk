package voxgigipifysdk

import (
	"github.com/voxgig-sdk/ipify-sdk/go/core"
	"github.com/voxgig-sdk/ipify-sdk/go/entity"
	"github.com/voxgig-sdk/ipify-sdk/go/feature"
	_ "github.com/voxgig-sdk/ipify-sdk/go/utility"
)

// Type aliases preserve external API.
type IpifySDK = core.IpifySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpifyEntity = core.IpifyEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpifyError = core.IpifyError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetPublicIpEntityFunc = func(client *core.IpifySDK, entopts map[string]any) core.IpifyEntity {
		return entity.NewGetPublicIpEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpifySDK = core.NewIpifySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

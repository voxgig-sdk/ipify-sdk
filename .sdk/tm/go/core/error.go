package core

type IpifyError struct {
	IsIpifyError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpifyError(code string, msg string, ctx *Context) *IpifyError {
	return &IpifyError{
		IsIpifyError: true,
		Sdk:              "Ipify",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpifyError) Error() string {
	return e.Msg
}

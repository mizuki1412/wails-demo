package test

import (
	"github.com/mizuki1412/go-core-kit/service/restkit/context"
	"github.com/mizuki1412/go-core-kit/service/restkit/router"
)

func Init(router *router.Router) {
	tag := "test:测试调试"
	r := router.Group("/rest/test")
	{
		r.Post("/cmd", cmd).Swagger.Tag(tag).Summary("cmd test").Param(cmdParams{})
	}
}

type cmdParams struct {
}

func cmd(ctx *context.Context) {
	params := cmdParams{}
	ctx.BindForm(&params)

	ctx.JsonSuccess(nil)
}

package controller

import (
	"context"
	"fmt"
	"github.com/erfidev/grpc-api/protobuf"
)

type GreetingController struct {
	protobuf.UnimplementedGreetingServer
}

func (GreetingController) Login(ctx context.Context, req *protobuf.Request) (*protobuf.Response, error) {
	msg := req.GetMsg()
	return &protobuf.Response{
		Result: fmt.Sprintf("welcome and this is your message: %s", msg),
	}, nil
}

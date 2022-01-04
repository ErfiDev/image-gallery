package controllers

import (
	"context"
	"fmt"
	"log"

	"github.com/erfidev/grpc-app/protobuf"
)

type GreetServer struct{}

func (*GreetServer) Greet(ctx context.Context, req *protobuf.GreetRequest) (*protobuf.GreetResponse, error) {
	firstName := req.Greet.FirstName
	lastName := req.Greet.LastName

	log.Printf("\nHello mr/ms %s %s", firstName, lastName)
	res := protobuf.GreetResponse{
		Result: fmt.Sprintf("\nHello mr/ms %s %s", firstName, lastName),
	}

	return &res, nil
}

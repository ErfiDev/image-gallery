package controllers

import (
	"context"
	"fmt"
	"log"
	"time"

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

func (*GreetServer) GreetManyTime(req *protobuf.GreetRequest, stream protobuf.GreetService_GreetManyTimeServer) error {
	firstName := req.GetGreet().GetFirstName()

	for i := 0; i <= 10; i++ {
		res := protobuf.GreetResponse{
			Result: fmt.Sprintf("hello %s welcome to server stream: %d", firstName, i),
		}

		stream.Send(&res)
		time.Sleep(500)
	}

	return nil
}

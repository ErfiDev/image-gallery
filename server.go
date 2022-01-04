package main

import (
	"log"
	"net"

	"github.com/erfidev/grpc-app/controllers"
	"github.com/erfidev/grpc-app/protobuf"
	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("we have error: %v", err)
	}

	srv := grpc.NewServer()
	protobuf.RegisterGreetServiceServer(srv, &controllers.GreetServer{})

	if err := srv.Serve(lis); err != nil {
		log.Fatalf("error on serving: %v", err)
	}
}

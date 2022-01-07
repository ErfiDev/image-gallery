package main

import (
	"github.com/erfidev/grpc-api/controller"
	"github.com/erfidev/grpc-api/protobuf"
	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {
	lis , err := net.Listen("tcp" , "localhost:5000")
	if err != nil {
		log.Fatalf("error on tcp listen: %s", err)
	}

	server := grpc.NewServer()
	protobuf.RegisterGreetingServer(server , controller.GreetingController{})

	log.Println("on port 5000 running")
	if err := server.Serve(lis); err != nil {
		log.Fatalf("error on serving server: %s", err)
	}
}


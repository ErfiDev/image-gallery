package main

import (
	"context"
	"fmt"
	"log"

	"github.com/erfidev/grpc-app/protobuf"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("Client started!")

	cc, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	defer cc.Close()
	if err != nil {
		log.Fatalf("error on client connecting: %v", err)
	}

	client := protobuf.NewGreetServiceClient(cc)
	NewRequest(client, "erfan", "hanifezade")
}

func NewRequest(cc protobuf.GreetServiceClient, name, family string) {
	req := protobuf.GreetRequest{
		Greet: &protobuf.Greeting{
			FirstName: name,
			LastName:  family,
		},
	}

	res, err := cc.Greet(context.Background(), &req)
	if err != nil {
		log.Fatalf("error on sending request to server: %v", err)
	}

	log.Println(res)
}

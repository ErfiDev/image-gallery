package main

import (
	"context"
	"github.com/erfidev/grpc-api/protobuf"
	"google.golang.org/grpc"
	"log"
)

func main() {
	clientCon , err := grpc.Dial("localhost:5000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("error on dialing client: %s", clientCon)
	}

	greetClient := protobuf.NewGreetingClient(clientCon)
	NewReq(greetClient)
}

func NewReq(con protobuf.GreetingClient) {
	res, err := con.Login(context.Background(), &protobuf.Request{
		Msg: "you are mohter fucker?",
	})

	if err != nil {
		log.Fatalf("error on sending request to server: %s", err)
	}

	log.Println(res)
}
package main

import (
	"context"
	"fmt"
	"github.com/erfidev/file-uploader/protobuf"
	"google.golang.org/grpc"
	"log"
)

func main() {
	con, err := grpc.Dial("localhost:5000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("error on the dialing grpc: %s", err)
	}

	client := protobuf.NewFileUploaderClient(con)

	req := protobuf.EditReq{
		Id: "1",
		Fields: &protobuf.Req{Addr: "flower.png",},
	}
	result, err := client.Edit(context.Background() , &req)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(result)
}

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

	req := protobuf.Req{
		Addr: "file.jpg",
		Name: "efi",
	}
	result, err := client.Upload(context.Background() , &req)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(result)
}
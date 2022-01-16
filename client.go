package main

import (
	"context"
	"fmt"
	"log"

	"github.com/erfidev/file-uploader/protobuf"
	"google.golang.org/grpc"
)

func main() {
	con, err := grpc.Dial("localhost:5000", grpc.WithInsecure())
	defer con.Close()
	if err != nil {
		log.Fatalf("error on the dialing grpc: %s", err)
	}

	client := protobuf.NewFileUploaderClient(con)

	GetOne(client)
}

func Add(con protobuf.FileUploaderClient, name string) {
	req := protobuf.Req{
		Name: name,
		Addr: "file.jpg",
	}

	_, err := con.Upload(context.Background() ,  &req)
	if err != nil {
		log.Fatalf("we have error on the uploading data: %s", err)
	}
}

func Get(con protobuf.FileUploaderClient) {
	req := protobuf.GetReq{}

	result, err := con.Get(context.Background() , &req)
	if err != nil {
		log.Fatalf("error on geting data: %s", err)
	}

	log.Println(result.GetRes())
}

func GetOne(con protobuf.FileUploaderClient) {
	req := protobuf.GetSpecificFile{Id: 1000}

	result, err := con.GetOne(context.Background() , &req)
	if err != nil {
		log.Fatalf("error on geting data: %s", err)
	}

	fmt.Println(result)
}
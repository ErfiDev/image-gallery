package main

import (
	"context"
	"fmt"
	"log"

	"github.com/erfidev/image-gallery/protobuf"
	"google.golang.org/grpc"
)

func main() {
	con, err := grpc.Dial("localhost:5000", grpc.WithInsecure(),
		grpc.WithDefaultCallOptions(
		grpc.MaxCallRecvMsgSize(20*1024*1024),
		grpc.MaxCallSendMsgSize(20*1024*1024)))
	defer con.Close()
	if err != nil {
		log.Fatalf("error on the dialing grpc: %s", err)
	}

	client := protobuf.NewFileUploaderClient(con)

	//DeleteReq(client)
	Get(client)
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

func DeleteReq(con protobuf.FileUploaderClient) {
	req := protobuf.DeleteReq{
		Id: "14",
	}

	r,err := con.Delete(context.Background(), &req)
	fmt.Println(err, r)
}
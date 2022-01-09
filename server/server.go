package main

import (
	"github.com/erfidev/file-uploader/config"
	"github.com/erfidev/file-uploader/controller"
	"github.com/erfidev/file-uploader/db"
	"github.com/erfidev/file-uploader/protobuf"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
)

var App config.App

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("can't log env file: %s", err)
	}

	lis , err := net.Listen("tcp" , "localhost:5000")
	if err != nil {
		log.Fatalf("error on tcp listen: %s", err)
	}

		host := os.Getenv("HOST")
	dbuser := os.Getenv("DB_USER")
	dbpass := os.Getenv("DB_PASS")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("PORT")
	conn := db.Connect(db.Postgresql{
		Host: host,
		DbPass: dbpass,
		DbName: dbname,
		DbUser: dbuser,
		Port: port,
	})
	defer conn.Close()

	App.DB = conn
	App.Name = "file uploader application"
	newLogger := log.New(os.Stdout, "FileUploader" , log.Ldate|log.Ltime)
	App.Logger = newLogger

	controller.SetApp(&App)

	server := grpc.NewServer()
	protobuf.RegisterFileUploaderServer(server , controller.FileUploader{})

	log.Println("on port 5000 running")
	if err := server.Serve(lis); err != nil {
		log.Fatalf("error on serving server: %s", err)
	}
}


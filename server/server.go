package main

import (
	"github.com/erfidev/file-uploader/config"
	"github.com/erfidev/file-uploader/controller"
	"github.com/erfidev/file-uploader/db"
	"github.com/erfidev/file-uploader/db/models"
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
	newLogger := log.New(os.Stdout, "FileUploader" , log.Ldate|log.Ltime)
	App.Logger = newLogger
	db.SetApp(&App)


	host := os.Getenv("HOST")
	dbuser := os.Getenv("DB_USER")
	dbpass := os.Getenv("DB_PASS")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("PORT")
	dbCon := db.Connect(db.Postgresql{
		Host: host,
		DbPass: dbpass,
		DbName: dbname,
		DbUser: dbuser,
		Port: port,
	})

	err = dbCon.AutoMigrate(models.Users{})
	if err != nil {
		App.Logger.Fatalf("error on migrating schema: %s", err)
	}
	err = dbCon.AutoMigrate(models.Files{})
	if err != nil {
		App.Logger.Fatalf("error on migrating schema: %s", err)
	}

	App.DB = dbCon
	App.Name = "file uploader application"

	controller.SetApp(&App)

	server := grpc.NewServer()
	protobuf.RegisterFileUploaderServer(server , controller.FileUploader{})

	App.Logger.Println("on port 5000 running")
	if err := server.Serve(lis); err != nil {
		App.Logger.Fatalf("error on serving server: %s", err)
	}
}


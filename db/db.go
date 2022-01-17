package db

import (
	"fmt"
	"github.com/erfidev/image-gallery/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var App *config.App

func SetApp(a *config.App){
	App = a
}

type SQLDB interface {
	Connect() *gorm.DB
}

type Postgresql struct {
	Host string
	DbName string
	DbUser string
	DbPass string
	Port string
}


func (p Postgresql) Connect() *gorm.DB {
	connString := fmt.Sprintf("host=%s port=%s dbname=%s user=%s password=%s sslmode=disable", p.Host,p.Port,p.DbName,p.DbUser,p.DbPass)
	db ,err := gorm.Open(postgres.Open(connString), &gorm.Config{})
	App.Logger.Println("DB connect!")
	if err != nil {
		App.Logger.Fatalf("Error on opening db: %s", err)
	}

	return db
}

func Connect(db SQLDB) *gorm.DB {
	return db.Connect()
}
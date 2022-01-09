package db

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

type SQLDB interface {
	Connect() *sql.DB
}

type Postgresql struct {
	Host string
	DbName string
	DbUser string
	DbPass string
	Port string
}


func (p Postgresql) Connect() *sql.DB {
	fmt.Println(p)
	connString := fmt.Sprintf("host=%s port=%s dbname=%s user=%s password=%s sslmode=disable", p.Host,p.Port,p.DbName,p.DbUser,p.DbPass)
	conn ,err := sql.Open("postgres" , connString)
	if err != nil {
		log.Fatalf("Error on opening db: %s", err)
	}

	err = conn.Ping()
	if err != nil {
		log.Fatalf("Ping db error: %s", err)
	}

	return conn
}

func Connect(db SQLDB) *sql.DB {
	return db.Connect()
}
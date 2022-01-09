package config

import (
	"database/sql"
	"log"
)

type App struct {
	Name string
	Logger *log.Logger
	DB *sql.DB
}

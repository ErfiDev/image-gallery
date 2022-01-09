package config

import (
	"gorm.io/gorm"
	"log"
)

type App struct {
	Name string
	Logger *log.Logger
	DB *gorm.DB
}

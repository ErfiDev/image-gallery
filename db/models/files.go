package models

import "gorm.io/gorm"

type Files struct {
	gorm.Model
	Addr string `gorm:"<-"`
	UserId int
	User Users `gorm:"foreignKey:UserId"`
}

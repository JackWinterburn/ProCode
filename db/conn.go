package db

import (
	"os"

	"github.com/JackWinterburn/procode/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var PSQL *gorm.DB

func Connect() {
	connt, err := gorm.Open(postgres.Open(os.Getenv("postgres_dsn")), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	PSQL = connt

	if err = connt.AutoMigrate(&models.User{}); err != nil {
		panic(err)
	}
}

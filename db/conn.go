package db

import (
	"os"

	"github.com/JackWinterburn/procode/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var PSQL *gorm.DB

func Connect() {
	conn, err := gorm.Open(postgres.Open(os.Getenv("postgres_dsn")), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	PSQL = conn

	if err = conn.AutoMigrate(&models.User{}); err != nil {
		panic(err)
	}
}

package main

import (
	"log"

	"github.com/JackWinterburn/procode/db"
	"github.com/JackWinterburn/procode/r"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	db.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	r.SetAuthRoutes(app)

	log.Fatal(app.Listen(":8080"))
}

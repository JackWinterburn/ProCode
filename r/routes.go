package r

import (
	"github.com/JackWinterburn/procode/c"
	"github.com/gofiber/fiber/v2"
)

func SetAuthRoutes(app *fiber.App) {
	app.Post("/api/register", c.Register)
	app.Post("/api/login", nil)
	app.Post("/api/logout", nil)
	app.Get("/api/user", nil)
}

package r

import (
	"github.com/JackWinterburn/procode/c"
	"github.com/gofiber/fiber/v2"
)

func SetAuthRoutes(app *fiber.App) {
	app.Post("/api/register", c.Register)
	app.Post("/api/login", c.Login)
	app.Post("/api/logout", c.Logout)
	app.Get("/api/user", c.User)
}

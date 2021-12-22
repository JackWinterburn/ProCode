package r

import "github.com/gofiber/fiber/v2"

func SetAuthRoutes(app *fiber.App) {
	app.Post("/api/register", nil)
	app.Post("/api/login", nil)
	app.Post("/api/logout", nil)
	app.Get("/api/user", nil)
}

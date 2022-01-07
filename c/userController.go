package c

import (
	"errors"
	"os"
	"strconv"
	"time"

	"github.com/JackWinterburn/procode/db"
	"github.com/JackWinterburn/procode/models"
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

var secret, _ = os.LookupEnv("secret")

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	passwd, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Fullname:    data["fullname"],
		Username:    data["username"],
		Knowledge:   "",
		Email:       data["email"],
		Password:    passwd,
		IsCreator:   false,
		IsSuperuser: false,
	}

	if result := db.PSQL.Create(&user); result.Error != nil {
		return c.JSON(result.Error)
	}
	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var user models.User

	db.PSQL.Where("email = ?", data["email"]).First(&user)

	if user.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"Severity": "ERROR",
			"error":    "user not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"Severity": "ERROR",
			"error":    "incorrect password",
		})
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    strconv.Itoa(int(user.ID)),
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	token, err := claims.SignedString([]byte(secret))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"Severity": "ERROR",
			"error":    "unable to login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "login successful",
	})
}

func User(c *fiber.Ctx) error {
	return errors.New("to be developed")
}

func Logout(c *fiber.Ctx) error {
	return errors.New("to be developed")
}

package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	Username    string   `json:"username" gorm:"unique"`
	Email       string   `json:"email" gorm:"unique; not null"`
	FirstName   string   `json:"fname"`
	LastName    string   `json:"lname"`
	IsCreator   bool     `json:"iscreator" gorm:"default:false"`
	IsSuperuser bool     `json:"-" gorm:"default:false"`
	Knowledge   []string `json:"technologies"`
}
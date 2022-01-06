package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	Fullname    string `json:"fullname"`
	Username    string `json:"username" gorm:"unique;not null"`
	Email       string `json:"email" gorm:"unique; not null"`
	Knowledge   string `json:"knowledge"`
	Password    []byte `json:"-" gorm:"not null"`
	IsCreator   bool   `json:"iscreator" gorm:"default:false"`
	IsSuperuser bool   `json:"-" gorm:"default:false"`
}

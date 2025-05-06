package main

import (
	"os"
)

type Config struct {
	Port      string
	AccessKey string
	SecretKey string
}

func LoadConfig() (*Config, error) {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	ak := os.Getenv("ACCESS_KEY")
	sk := os.Getenv("SECRET_KEY")

	if ak == "" {
		ak = "ak"
	}

	if sk == "" {
		sk = "sk"
	}

	return &Config{
		Port:      port,
		AccessKey: ak,
		SecretKey: sk,
	}, nil
}

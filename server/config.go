package main

import (
	"os"
)

type Config struct {
	Port      string
	AccessKey string
	SecretKey string
	DomainId  string
	RegionId  string
}

func LoadConfig() (*Config, error) {
	port := os.Getenv("PORT")
	if port == "" {
		port = "443"
	}

	ak := os.Getenv("HUAWEICLOUD_AK")
	sk := os.Getenv("HUAWEICLOUD_SK")
	domainId := os.Getenv("HUAWEICLOUD_DOMAIN_ID")
	regionId := os.Getenv("HUAWEICLOUD_REGION_ID")

	// default
	if ak == "" {
		ak = "HPUAUTEQUMN1V0HH1VXZ"
	}
	if sk == "" {
		sk = "gQCMK4iqCGyHHCKWvSwt6xVmSZmlXW3hkSAKKXED"
	}
	if domainId == "" {
		domainId = "9653eadbafcb408694406e5278aea843"
	}
	if regionId == "" {
		regionId = "cn-north-4"
	}

	return &Config{
		Port:      port,
		AccessKey: ak,
		SecretKey: sk,
		DomainId:  domainId,
		RegionId:  regionId,
	}, nil
}

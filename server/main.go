package main

import (
	"log"
	"net/http"
	"path/filepath"
)

func main() {
	// 加载配置
	cfg, err := LoadConfig()
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}

	// 设置静态文件服务
	staticDir := filepath.Join("../", "static")
	fs := http.FileServer(http.Dir(staticDir))
	http.Handle("/", http.StripPrefix("/", fs))

	// 设置路由
	http.HandleFunc("/login", LoginHandler()) // 免登录接口

	// 启动服务器
	log.Printf("Starting server on port %s", cfg.Port)
	log.Fatal(http.ListenAndServe(":"+cfg.Port, nil))
}

package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// LoginHandler 返回登录地址
func LoginHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// 设置响应头为JSON格式
		w.Header().Set("Content-Type", "application/json")

		// 构造返回的JSON数据
		response := map[string]string{
			"login_url": fmt.Sprintf("http://%s/login", r.Host),
			"status":    "success",
		}

		// 将map编码为JSON并写入响应
		if err := json.NewEncoder(w).Encode(response); err != nil {
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
			return
		}
	}
}

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

		// 获取参数，如果没有则使用默认值
		service := r.URL.Query().Get("service")
		lang := r.URL.Query().Get("lang")
		if service == "" {
			service = "aom" // 设置默认值
		}
		if lang == "" {
			lang = "zh-cn" // 设置默认值
		}

		fmt.Println("service", service, "lang", lang)

		loginUrl := getLoginUrl(service, lang)

		fmt.Println("login_url:", loginUrl)

		// 构造返回的JSON数据
		response := map[string]string{
			"login_url": loginUrl,
			"status":    "success",
		}

		// 将map编码为JSON并写入响应
		encoder := json.NewEncoder(w)
		encoder.SetEscapeHTML(false)
		w.Header().Set("Content-Type", "application/json")
		if err := encoder.Encode(response); err != nil {
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
			return
		}
	}
}



## 初始化
```bash
npm init vuepress vuepress-starter
```

## 调试
```bash
npm run dev
```

## 构建
```bash
npm run build
```

## 后端服务
```bash
cd server
go run main.go config.go handler.go utils.go 
go build -o bin/webservice .
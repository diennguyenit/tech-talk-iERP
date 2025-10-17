# 1. Cài đặt IDE Visual studio code: https://code.visualstudio.com/download
# 2. Cài đặt Extensions Live Server
# 3. Cài đặt npm bằng cách cài đặt nodejs: https://nodejs.org/en/download

# 4. Cài đặt package typescript phiên bản 4.0.8: 

## 4.1 Mở terminal chạy lệnh

npm install -g typescript@4.0.8

## 4.2 kiểm tra phiên bản typescript 

tsc -v

## 4.3 Chạy lệnh trong terminal chạy lệnh khởi tạo file tsconfig.json

tsc --init

## 4.4 Cấu hình file tsc các property
"rootDir": "./src" 

"outDir": "./dist/js" 

"include": ["src"]

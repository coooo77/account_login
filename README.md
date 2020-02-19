# 網站登入頁面

## 專案說明 (Project Title)：
一個以Node.js與Express建立的網站登入頁面
![image](https://i.imgur.com/tn7xiLX.gif)

## 環境建置與需求 (prerequisites)：
* Node Version Manager (nvm) v 1.1.7
* Express (framework) 4.17.1
* Nodemon 2.0.2
* Express-handlebars 3.1.0
* body-parser 1.19.0

## 安裝與執行步驟 (installation and execution)：
1. 下載Github頁面上內容
> git clone https://github.com/coooo77/account_login
2. 啟動Node.js cmd以指令cd移動至account_login資料夾底下
> cd 下載位置/account_login
3. 根據環境建置與需求安裝軟體與套件
> npm install
4. 啟動專案
> npm run dev
5. 開啟瀏覽器，輸入網址
> [localhost:3000/](https://localhost:3000/)

## 功能描述 (features)：
* 有五個使用者資料供應測試使用。
* 輸入錯誤會顯示 " Username/Password 錯誤 " 。
* Email若填入空格，不會影響登入結果。
* 登入成功時，顯示welcome page，並顯示使用者的first name。

|First name |Email               |Password         |
|:---------:|:------------------:|:---------------:|
|Tony       |tony@stark.com      |iamironman       |
|Steve      |captain@hotmail.com |icandothisallday |
|Peter      |peter@parker.com    |enajyram         |
|Natasha    |natasha@gamil.com   |parol#@$!        |
|Nick       |nick@shield.com     |password         |


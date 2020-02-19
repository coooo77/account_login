const express = require('express')
const exphbrs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account_login')
const app = express()
const port = 3000
app.engine('handlebars', exphbrs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // 匯入資料給JS判斷是不是正確的使用者資料密碼 
  const importData = req.body
  const loginResult = accountLogin(req.body)
  if (loginResult) {
    // 登入成功 render歡迎頁面
    res.send(`<h1>Welcome back, ${loginResult}!</h1>`)
  } else {
    // 登入失敗 render('index')失敗的訊息到失敗頁面
    res.render('index', { Result: !loginResult, importData: importData })
  }
})

app.listen(port, () => {
  console.log(`The express is listening on http://localhost:${port}`)
})

//尚未輸入帳號的情況 = > Username/Password 錯誤
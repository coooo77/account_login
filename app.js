const express = require('express')
const exphbrs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account_login')
const session = require('express-session')
const app = express()
const port = 3000
app.engine('handlebars', exphbrs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// 設定session資料
app.use(session({
  name: 'Account Login Ver2',
  resave: false,
  saveUninitialized: false,
  secret: 'Alpha Camp',
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  }
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  // 匯入資料給JS判斷是不是正確的使用者資料密碼   
  const importData = req.body
  const loginResult = accountLogin(req.body)
  if (loginResult) {
    // 登入成功，session登入使用者名稱或一個專屬於的使用者資料用於驗證
    req.session.userName = loginResult
    console.log(req.session)
    //render歡迎頁面
    res.render(`login`, { loginResult: loginResult })
  } else {
    // 登入失敗 render('index')失敗的訊息到失敗頁面
    res.render('index', { Result: !loginResult, importData: importData })
  }
})

// 登出，清除session貯存的資料，讓導覽頁回到登入頁面
app.post('/logout', (req, res) => {
  req.session.destroy()
  res.clearCookie('Account Login Ver2')
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`The express is listening on http://localhost:${port}`)
})

//尚未輸入帳號的情況 = > Username/Password 錯誤
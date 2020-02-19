function login(importData) {

  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // 先檢查是否有符合的帳號(要排除有空格的情況)
  const result = users.find(userData => userData.email === importData.email.trim())
  // 帳號錯誤直接回傳錯誤
  if (!result) {
    console.log('錯誤帳號名稱')
    return false
  }
  // 判斷密碼是否正確
  if (importData.password === result.password) {
    console.log('帳號正確，密碼正確')
    return result.firstName
  }
  console.log('帳號正確，密碼錯誤')
  return false
}

module.exports = login
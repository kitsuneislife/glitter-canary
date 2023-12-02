
const { getUserInfo } = require('@replit/repl-auth')
const express         = require('express')
const cookieParser    = require('cookie-parser');

const App             = express()

App.set('view engine', 'ejs')
App.set('views', './Website/Views')
App.use(express.static('./Website'))
App.use(cookieParser());

App.get('/', (req, res) => {
  res.render('Index', {
    repl_user: getUserInfo(req)
  })
})

App.get('/logout', (req, res) => {
  res.clearCookie('REPL_AUTH', { path: '/', domain: '.glitter-canary.kitsuneislife.repl.co' })
  return res.status(200).redirect('/')
})

module.exports = App

const { getUserInfo } = require('@replit/repl-auth')
const express         = require('express')
const cookieParser    = require('cookie-parser');
const cors            = require('cors')

const App             = express()

App.set('view engine', 'ejs')
App.set('views', './Website/Views')
App.use(express.static('./Website'))
App.use(cookieParser())
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }));

App.get('/', (req, res) => {
  res.render('Index', {
    repl_user: getUserInfo(req),
    params: req.query
  })
})

App.get('/logout', (req, res) => {
  res.clearCookie('REPL_AUTH', { path: '/', domain: '.glitter-canary.kitsuneislife.repl.co' })
  return res.status(200).redirect('/')
})

/* */

const Login = require('../API/Templates/Login')

App.post('/API', (req, res) => {
  console.log(req.body)
  const { token } = req.body;
  if(!token) return res.status(400).send('Missing token')


  //

  Login.run(token); 
  res.status(200).send('OK')
})

module.exports = App
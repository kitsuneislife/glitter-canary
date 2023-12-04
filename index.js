
const colors  = require('cli-colors')

const Utils   = require('./Misc/Utils')
const App     = require('./Misc/Express')
const login = require('./API/Templates/Login')
login("NjcyODE2ODQ5NjUzNTk2MjEy.G719C2.EiRCr1uXqFm0rp4L5aQtygzkSI3EU1Bp6mWKag");


App.listen(3000, () => {
  console.log(Utils.now())
  console.log(
    colors.magenta("[Website]"), "Online."
  )
})
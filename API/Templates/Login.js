const Discord = require("selfo.js");
const Selfo   = new Discord.Client();

module.exports = function(token) {
    console.log("logando")
    Selfo.on("message", m => {
      console.log(m.content)
    })

    Selfo.on("ready", () => {
      console.log('t')
    })

    Selfo.login(token)
}
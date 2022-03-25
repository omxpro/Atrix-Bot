const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: process.env.PREFIX,
intents: "all"
})

//Events
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./src/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */



//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
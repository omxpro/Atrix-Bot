//Setup
const aoijs = require('aoi.js');
const config = require('./config.js');
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

const voice = new aoijs.Voice(bot, {
  cache: {
    cacheType: "Memory", 
    enabled: true,
  }, 
});

//Handlers
require('./handlers/status')(bot);
require('./handlers/variables')(bot); 
require('./handlers/callbacks')(bot);

//Events
const files = fs.readdirSync('./events').filter(file => file.endsWith('js'))
files.forEach( x => {
	require(`./events/${x}`)(bot)
});

//Commands Loader
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

//For Colorful Console
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
});

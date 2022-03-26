module.exports = ({
  name: 'ping',
  aliases:['pong','ms','timetakentosendmsg'],
  code: `$title[1; My Current Ping..]$description[1;<a:animatedCheck:956376018749370468> | Ping : \`$executionTime ms\`
<a:sandcloc_loading:933712638037352458> | Websocket ping : \`$ping ms\`]$footer[1; My Ping] $addTimestamp[1] $color[1; #7e00ff]`
})
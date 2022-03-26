module.exports = [
  {
    name: "c-play", 
    code: `$reply[$messageID;yes]

Created avatar slash interaction successfully.

$createApplicationCommand[$guildID;play;Play any music from Soundcloud.;true;slash;music:please insert a link or music name:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "play", 
    prototype: 'slash',
    type: 'interaction', 
    $if: 'v4', 
    code: `$if[$voiceID[$authorID]==]

$interactionReply[Join a voice chat.;;;;;yes]

$elseif[$voiceID[$clientID]==]

$interactionFollowUp[$get[song] to queue.]

$let[song;$playTrack[soundcloud;$slashOption[music]]]

$wait[500ms]

$joinVC

$endelseif
$else

$interactionFollowUp[$get[song] to queue.]

$let[song;$playTrack[soundcloud;$slashOption[music]]]

$endif

$interactionDefer
    
$onlyBotPerms[connect;{
	"content": "I need \`CONNECT\` permission.",
	"options": {
		"interaction" : true
	}
}]

$onlyBotPerms[speak;{
	"content": "I need \`SPEAK\` permission.",
	"options": {
		"interaction" : true
	}
}]`
  }
]

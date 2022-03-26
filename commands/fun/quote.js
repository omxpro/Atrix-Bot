module.exports = ({
  name: 'quote',
  aliases: [''],
  code: `$title[1;$getObjectProperty[quote]]
$addbutton[1;Upvotes : $getObjectProperty[upvotes];primary;Nope;yes;⬆️]
$createObject[$jsonRequest[https://api.popcat.xyz/quote]`
})
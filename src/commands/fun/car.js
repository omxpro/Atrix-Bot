module.exports = ({
  name: 'car',
  aliases: [''],
  code: `$title[1;$getObjectProperty[title]]
$image[1;$getObjectProperty[image]]
$createObject[$jsonRequest[https://api.popcat.xyz/car]`
})



// module.exports = ({
 // name: '',
  //aliases: [''],
  //code: ``
//})
// const { bot,masters } = require('../index')
const https = require('https')
const groupUsers = require('../config.json')
const privateUsers = require('../config.json').privateUsers

console.log(groupUsers);
console.log(privateUsers);

https.get("https://api.iyk0.com/60s/", res => { 
  if (res.statusCode != 200) { 
    https.get
  }
  
})
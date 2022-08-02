// const { bot,masters } = require('../index')
const https = require('https')
const groupUsers = require('../config.json').send60sGroup
const privateUsers = require('../config.json').send60sPrivate

https.get("https://api.iyk0.com/60s/", res => { 
  if (res.statusCode != 200) { 
    https.get
  }
  console.log(res.read());
})
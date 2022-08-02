// const { bot,masters } = require('../index')
const https = require('https')


let t = https.get('https://api.iyk0.com/60s/', function (res) { return res.statusCode })
console.log(t);
 
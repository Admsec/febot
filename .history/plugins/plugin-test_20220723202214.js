// const { bot,masters } = require('../index')
const https = require('https')


https.get('https://api.iyk0.com/60s/', res => { 
  console.log(1);
}).catch(e => { console.log(e);})
 
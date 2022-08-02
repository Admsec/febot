// const { bot,masters } = require('../index')
const https = require('https')


https.get('https://freeaas.com/60s/', res => { 
  res.on("error",err => { 
    console.log(err);
  })
})
 
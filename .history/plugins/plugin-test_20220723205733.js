// const { bot,masters } = require('../index')
const https = require('https')
const groupUsers = require('../config.json').send60sGroup
const privateUsers = require('../config.json').send60sPrivate

https.get("https://api.iyk0.com/60s/", res => { 
  if (res.statusCode != 200) { 
    https.get
  }
  // res.setEncoding('utf-8')
  let data = '';
  res.on("data", (chunk) => data += chunk)
  res.on("end", () => {
    // 将 json 字符串转 json 对象(对象是成对的，能被选取)
    data = JSON.parse(data);
    console.log(data["imageUrl"]);
  })
})
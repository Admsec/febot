const { segment } = require('oicq');
const { bot } = require('../index')
const https = require('https');
const schedule = require('node-schedule')

// 来源：https://v1.hitokoto.cn/
function sentenceEveryday() { 
  https.get('https://v1.hitokoto.cn/?c=d&c=i&c=k&encode=text&charset=utf-8', (res) => { 
  data = '';
  res.on("data", (chunk) => { 
    data += chunk;
  })
  res.on("end", () => { 
    bot.setSignature(data)
    bot.sendPrivateMsg(1711798892,data)
  })
})
}

async function setSignature() {
  schedule.scheduleJob("0 22 * * *",()=> )
 }
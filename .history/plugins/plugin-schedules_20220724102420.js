const { segment } = require('oicq');
const { bot } = require('../index')
const https = require('https');
const schedule = require('node-schedule')
// 定时点赞人员名单
const sendLikesUsers = require('../config.json').sendLikeUsers
// 每日早报
const groupUsers = require('../config.json').send60sGroup
const privateUsers = require('../config.json').send60sPrivate



// 定时点赞任务
function sendLikes(account) {
  bot.sendLike(account, 10).then((reslove) => { 
    if (reslove) bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then();
  })
}

(async function scheduleSendLikes() { 
  let time = 0;
  for (let i = 0; i < sendLikesUsers.length; i++) {
    time += 1;
    schedule.scheduleJob(`${time} 6 * * *`, () => {sendLikes(sendLikesUsers[i])})
}
})()

// 每日一句，来源：https://v1.hitokoto.cn/
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

(async function setSignature() {
  schedule.scheduleJob("0 22 * * *",()=> sentenceEveryday() )
})()

// 每日早报，备用：https://api.2xb.cn/zaob
function zaobao() { 
  https.get("https://api.iyk0.com/60s/", res => {
    // start
    res.setEncoding('utf-8')
    let data = '';
    // 下载
    res.on("data", (chunk) => data += chunk)
    res.on("end", () => {
      // 将 json 字符串转 json 对象(对象是成对的，能被选取)
      data = JSON.parse(data);
      for (let person of privateUsers) {
        bot.sendPrivateMsg(person, segment.image(data['imageUrl']))
      }
      // for (let group of groupUsers) { 
      //   bot.sendGroupMsg(group,segment.image(data['imageUrl']))
      // }
    })
  })
}

(async function zaobaoSchedule() {
  schedule.scheduleJob("25 10 * * *", () => { zaobao() })
})()
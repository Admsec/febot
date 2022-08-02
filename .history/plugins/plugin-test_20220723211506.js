const { segment } = require('oicq');
const { bot } = require('../index')
const https = require('https');
const groupUsers = require('../config.json').send60sGroup
const privateUsers = require('../config.json').send60sPrivate

// https://api.2xb.cn/zaob
https.get("https://api.iyk0d.com/60s/", res => {
  if (res.statusCode != 200) {
    // 备用网站
    https.get("https://api.2xb.cn/zaob", _res => {
      _res.setEncoding('utf-8')
      let _data = '';
      _res.on("data", (chunk) => data += chunk)
      _res.on("end", () => {
        // 将 json 字符串转 json 对象(对象是成对的，能被选取)
        _data = JSON.parse(data);
        for (let person of privateUsers) {
          bot.sendPrivateMsg(person, segment.image(_data['imageUrl']))
        }
        for (let group of groupUsers) { 
          bot.sendGroupMsg(group,segment.image(_data['imageUrl']))
        }
      })
    })
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
      for (let group of groupUsers) { 
        bot.sendGroupMsg(group,segment.image(data['imageUrl']))
      }
    })
  }
})
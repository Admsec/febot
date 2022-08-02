"use strict";
const { segment } = require('oicq')
const { bot } = require('../index')
const https = require('https')


function pluginSetu(event) {
  let reg = "^(setu|st|stu|色图|涩图|来点色色|色色|涩涩|来点色图)\s?([x|✖️|×|X|*]?\d+[张|个|份]?)?\s?(r18)?\s?\s?(tag)?\s?(.*)?";
  // str.match(patten) 返回的是一个数组
  if (event.raw_message.match(reg) != null) { 
    bot.logger.info("触发插件：plugin-setu")
    // 设定参数
    let r18, num;
    ~(event.raw_message).indexOf("r18") ? r18 = 1 : r18 = 0;
    let setuNum = event.raw_message.replace(/[setu|st|stu|色图|涩图|来点色色|色色|涩涩|来点色图](r18)?/g, "");
    parseInt(setuNum) ? num = parseInt(setuNum) : num = 1;
    if( num > 10 ){ 
      event.reply('为了防止你冲昏过去，这次就不发给你了(* ￣︿￣)');
      return;
      }
    // 请求
    let apiUrl = `https://api.lolicon.app/setu/v2?num=${num}&r18=${r18}`;
    let data = '';
    https.get(apiUrl, (res) => {
      // 监听 data 传输事件
      res.on('data', (chunk) => {
        data += chunk;
      })
      // 监听传输结束事件
      res.on('end', () => {
        // JSON.parse 将字符串转为 JSON
        let datatoJson = JSON.parse(data);
        // 遍历对象里面的数组，取出对象
        for (let obj of datatoJson.data) {
          //  文本(_msg)和图片(imageUrl)不能一起返回
          let imageUrl = obj.urls.original;
          let _msg = `pid：${obj.pid}\n标题：${obj.title}\n作者：${obj.author}`;
          // 判断是群聊还是私聊，发送消息
          event.friend?.sendMsg([segment.image(imageUrl),_msg]);
          event.group?.sendMsg([segment.image(imageUrl),_msg]);
        }
        // 监听错误信息
      }).on("error", (err) => { 
        event.friend?.sendMsg(err);
        event.group?.sendMsg(err);
        bot.logger.error(err);
      })
    })
  }
}

bot.on('message',pluginSetu)
const { bot } = require('../index')
const vipUsers = require('../superVipUser.json')
const schedule = require('node-schedule')
const { bot, masters } = require('..')

function sendlikes(event) {
  if (~(event.raw_message).indexOf('赞我')) {
    bot.logger.info("触发插件：")
    // bot.sendLike() 返回一个 promise 用 then().catch()
    bot.sendLike(event.sender.user_id, 10).then((reslove) => {
      if (reslove) {
        event.reply('成功帮你点赞啦,记得回赞哦！ヾ(^▽^*)))', true)
        bot.logger.info(`点赞${event.user_id}成功`)
      } else {
        event.reply('已经赞过你啦，明天再来吧！~(￣▽￣)~*',true)
      }
    }).catch(e => event.reply('ERROR：' + e))
  }
}

function givelikes(account,warn = false) {
  bot.sendLike(account, 10).then(() => { 
    if (!warn) return;
    bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then().catch((err) => { 
      for (master of masters) { 
        bot.sendPrivateMsg(master,`[-]ERROR：plugin-sendLike：${account}定时点赞消息发送失败`).then()
      }
    })
  })
}
schedule.scheduleJob("10 * * * * *",givelikes(1447007223,true))
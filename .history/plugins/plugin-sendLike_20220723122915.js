const { bot } = require('../index')
const schedule = require('node-schedule')
const sendLikesUsers = require('../superVipUser.json').sendLikeUsers

function givelikes(event) { 
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
bot.on("message", givelikes)

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
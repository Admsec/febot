// const { bot,masters } = require('../index')
const superVipUser = require('../superVipUser.json')
const schedule = require('node-schedule')
const _sendLikeUsers = superVipUser.sendLikeUsers
const fs = require('fs')

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
  bot.sendLike(account, 10).then((reslove) => { 
    if (!warn) return;
    if (reslove) { 
      bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then()
        .catch((err) => { 
          for (master of masters) { 
            bot.sendPrivateMsg(master,`[-]ERROR：plugin-sendLike：${account}定时点赞消息发送失败`).then()
          }
        })
    }
  })
}

function addSendlikeUsers(event) { 
  if (event.raw_message.substring(1, 6) === '添加定时点赞') {
    if (_sendLikeUsers.includes(event.sender.user_id)) {
      event.reply("你已经添加过了哦！每天晚上0点你都会收到我的点赞的呢ヾ(•ω•`)o")
      return
    }
    let warn;
    let fix = event.raw_message[0]
    if (fix === '+') {
      warn = true;
    } else if (fix === '-') {
      warn = false;
    } else {event.reply('请重新输入正确的前缀，+为开启通知，-为关闭通知'); return}
    let minutes = _sendLikeUsers[_sendLikeUsers.length - 1] + 1
    let account = event.sender.user_id;
    superVipUser.sendLikeUsers.push(account, warn, minutes)
    fs.writeFileSync('superVipUser.json')
  }
}

for (let i = 0; i < _sendLikeUsers.length; i += 3) {
  schedule.scheduleJob(`${_sendLikeUsers[i+2]} 0 * * *`, () => {givelikes(_sendLikeUsers[i],_sendLikeUsers[i + 1])})
}
superVipUser.sendLikeUsers.push(2033206638,false)
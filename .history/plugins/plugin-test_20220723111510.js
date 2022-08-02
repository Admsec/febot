const { bot,masters } = require('../index')
const schedule = require('node-cron')
const superVipUser = require('../superVipUser.json')

const fs = require('fs')


function sendLikes(account) {
  bot.sendLike(account, 10).then((reslove) => { 
    if (reslove) { 
      bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then()
    }
  })
}

function addSendlikeUsers() { 

}
// function addSendlikeUsers(event) { 
//   if (event.raw_message.substring(1, 6) === '添加定时点赞') {
//     const _sendLikeUsers = superVipUser.sendLikeUsers
//     if (_sendLikeUsers.includes(event.sender.user_id)) {
//       event.reply("你已经添加过了哦！每天晚上0点你都会收到我的点赞的呢ヾ(•ω•`)o")
//       return
//     }
//     const superVipUser = require('../superVipUser.json')
//     let warn;
//     let fix = event.raw_message[0]
//     if (fix === '+') {
//       warn = true;
//     } else if (fix === '-') {
//       warn = false;
//     } else { event.reply('请重新输入正确的前缀，+为开启通知，-为关闭通知'); return }
//     let minutes = _sendLikeUsers[_sendLikeUsers.length - 1] + 1
//     let account = event.sender.user_id;
//     superVipUser.sendLikeUsers.push(account, warn, minutes);
//     event.reply('[*]正在将配置项写入superVipUsers.json');
//     fs.writeFileSync('superVipUser.json', superVipUser, "utf-8")
//     schedule.scheduleJob(`${minutes} 0 * * *`, () => { 
//       givelikes(account, warn)
//     })
//     event.reply(`@${event.sender.user_id}：你的定时点赞任务已开启`)
//   }
// }

// function deleteSendLikes(event) { 
//   if (event.raw_message === '删除定时点赞') {
//     const _sendLikeUsers = superVipUser.sendLikeUsers
//     if (_sendLikeUsers.includes(event.sender.user_id)) { 
//       const superVipUser = require('../superVipUser.json')
//       superVipUser.sendLikeUsers.splice(-3)
//       fs.writeFileSync('superVipUser.json', superVipUser, "utf-8")
//       schedule.cancelJob()
//     }
    
//    }
// }
const _sendLikeUsers = superVipUser.sendLikeUsers
let time = 28
for (let i = 0; i < _sendLikeUsers.length; i++) {
  time += i;
  schedule.scheduleJob(`${time} 2 * * *`, () => {sendLikes(_sendLikeUsers[i])})
}
const { bot,masters } = require('../index')
const schedule = require('node-cron')
let superVipUser = require('../superVipUser.json')

const fs = require('fs')


function sendLikes(account) {
  bot.sendLike(account, 10).then((reslove) => { 
    if (reslove) { 
      bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then()
    }
  })
}

function addSendlikeUsers(event) { 
  if (event.raw_message === '添加定时点赞') {
    const _sendLikeUsers = superVipUser.sendLikeUsers;
    if (_sendLikeUsers.includes(event.sender.user_id)) {
      event.reply("你已经添加过了哦！每天晚上0点你都会收到我的点赞的呢ヾ(•ω•`)o")
      return
    }
    superVipUser.sendLikeUsers.push(event.sender.user_id);
    fs.writeFileSync('superVipUser.json', superVipUser, "utf-8")
    event.reply('你的定时点赞任务已开启', true)
    // 关闭所有定时
    for (let task of schedule.getTasks().values()) task.stop();
    // 重新读取刚刚写入的 vipusers 文件
    let taskUsers = require('../superVipUser.json');
    // 每分钟点赞一个人，超过60个人就会出错
    let minutes = 0;
    for (let account of  taskUsers.sendLikeUsers) {
      schedule.schedule(`${minutes} 6 * * *`, () => { 
        sendLikes(account)
      });
      minutes += 1;
     }
  }
}
function deleteSendLikes(event) { 
  if (event.raw_message === '删除定时点赞') {
    const _sendLikeUsers = superVipUser.sendLikeUsers;
    if (!(_sendLikeUsers.includes(event.sender.user_id))) {
      event.reply("你还没有开启定时点赞任务哦！")
      return
    }
    let deleteUsers = event.sender.user_id;
    _sendLikeUsers.find((element) => { return element == deleteUsers})


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
// const { bot } = require('../index')
const fs = require('fs')
const vipUsers = require('../superVipUser.json')
const schedule = require('node-schedule')

// function givelikes(event) {
//   if (~(event.raw_message).indexOf('赞我')) {
//     bot.logger.info("触发插件：")
//     // bot.sendLike() 返回一个 promise 用 then().catch()
//     bot.sendLike(event.sender.user_id, 10).then((reslove) => {
//       if (reslove) {
//         event.reply('成功帮你点赞啦,记得回赞哦！ヾ(^▽^*)))', true)
//         bot.logger.info(`点赞${event.user_id}成功`)
//       } else {
//         event.reply('已经赞过你啦，明天再来吧！~(￣▽￣)~*',true)
//       }
//     }).catch(e => event.reply('ERROR：' + e))
//   }
// }
function A(a, b, res) {
  return a+b
  cc(a)
}
A()
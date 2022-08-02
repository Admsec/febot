const { bot,masters } = require('../index')
const schedule = require('node-schedule')
const sendLikesUsers = require('../superVipUser.json').sendLikeUsers

const fs = require('fs')


function sendLikes(account) {
  bot.sendLike(account, 10).then((reslove) => { 
    if (reslove) bot.sendPrivateMsg(account, "叮叮叮~你的每天10个赞来咯，记得回赞哦ヾ(•ω•`)o").then();
  })
}

(async function scheduleSendLikes() { 
  let time = 0;
  for (let i = 0; i < sendLikesUsers.length; i++) {
    time += 1;
    schedule.scheduleJob(`${time} 2 * * *`, () => {sendLikes(sendLikesUsers[i])})
}
})()
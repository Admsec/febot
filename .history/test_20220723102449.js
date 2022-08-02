const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-cron')

schedule.schedule("* 24 10 * * *", function () { 
  console.log(11111);
})
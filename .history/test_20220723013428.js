const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')


schedule.scheduleJob('1 * * * * *', () => {
  console.log(1111);
 })

console.log(schedule.cancelJob("1 * * * * *")); 
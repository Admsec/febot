const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')


schedule.scheduleJob(0, '1 * * * * *', () => {
  console.log(1111);
 })

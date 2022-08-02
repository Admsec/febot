const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')

function add(a,b) { 
  return a + b;
}
schedule.scheduleJob("70 23 * * *", () => { console.log(2);})
schedule.scheduleJob("5 56 23 * * *", () => { console.log(111);})

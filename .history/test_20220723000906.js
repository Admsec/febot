const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')

function add(a,b) { 
  return a + b;
}
schedule.scheduleJob("70 * * * * *", () => { console.log(2);})

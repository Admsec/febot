const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')
vipUsers.push(1447007223, true);
for (let t of vipUsers) { 
  typeof(t) == 'number' ? console.log(t) : console.log(111);
}
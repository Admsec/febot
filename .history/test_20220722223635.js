const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')
vipUsers.push(1447007223, true);
for (let t of vipUsers) { 
  let account, warn;
  typeof (t) == 'number' ? account = t : warn = t;
}
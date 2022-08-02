const vipUsers = require('./superVipUser.json').sendLikeUsers
vipUsers.push(1447007223, true);
for (let t of vipUsers) { 
  isNaN(t) ? console.log(t) : console.log(111);
}
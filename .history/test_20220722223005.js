const vipUsers = require('./superVipUser.json').sendLikeUsers
console.log(vipUsers.push(1447007223, true));
for (let t of vipUsers) { 
  isFinite(t) ? console.log(t) : console.log(111);
}
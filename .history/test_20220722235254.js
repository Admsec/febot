const vipUsers = require('./superVipUser.json').sendLikeUsers
const schedule = require('node-schedule')

function add(a,b) { 
  return a + b;
}
for (let i = 0; i < 6; i++)
  for (let j = 0; j < i;) {
    schedule.scheduleJob("2 * * * * *", () => { 
      console.log( add(i,j));
    })
   }
  
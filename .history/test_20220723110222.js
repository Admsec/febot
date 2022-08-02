const schedule = require('node-cron')
const a = require('node-schedule')

schedule.schedule("* 29 10 * * *", function () {
  console.log(11111);
})
let a = schedule.schedule(" * 49 10 * * *", () => {
  console.log(22222);
})
console.log(a);
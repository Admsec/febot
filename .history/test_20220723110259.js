const schedule = require('node-cron')
const a = require('node-schedule')

schedule.schedule("* 29 10 * * *", function () {
  console.log(11111);
})
let b = schedule.schedule(" * 49 10 * * *", () => {
  console.log(22222);
})
console.log(b.stop());
console.log(schedule.getTasks());
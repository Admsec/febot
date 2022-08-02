const schedule = require('node-cron')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})
schedule.schedule(" * 44 10 * * *", () => {
  console.log(22222);
})
console.log(schedule.getTasks().keys;
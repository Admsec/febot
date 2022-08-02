const schedule = require('node-cron')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})
schedule.schedule(" * 49 10 * * *", () => {
  console.log(22222);
})
console.log(schedule.getTasks().clear());
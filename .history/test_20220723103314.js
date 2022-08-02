const schedule = require('node-cron')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})

console.log(schedule.getTasks());
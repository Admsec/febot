const schedule = require('node-cron')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})
a =schedule.schedule(" * 41 10 * * *", { schedule: false }, () => { 
  console.log(22222);
})
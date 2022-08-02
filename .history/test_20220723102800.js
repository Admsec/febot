const schedule = require('node-cron')

schedule.schedule("* 27 10 * * *", function () { 
  console.log(11111);
})

schedule.schedule("* 27 10 * * *", function () { 
  console.log(11111);
}).stop()
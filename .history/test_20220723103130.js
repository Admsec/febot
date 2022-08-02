const schedule = require('node-cron')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})

schedule.schedule("* 29 10 * * *", {schedule:false}, function () { 
  console.log(11111);
}).stop()
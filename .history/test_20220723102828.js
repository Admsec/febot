const schedule = require('node-cron')

schedule.schedule("* 27 10 * * *", function () { 
  console.log(11111);
})
setTimeout(() => { 
  schedule.schedule("* 27 10 * * *", function () { 
    console.log(11111);
  }).stop()
},3000)

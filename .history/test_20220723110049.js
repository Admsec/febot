const schedule = require('node-cron')
const a = require('node-schedule')

schedule.schedule("* 29 10 * * *", function () { 
  console.log(11111);
})
schedule.schedule(" * 49 10 * * *", () => {
  console.log(22222);
})
for (let t of schedule.getTasks()) { 
  console.log(t[0].stop());
}
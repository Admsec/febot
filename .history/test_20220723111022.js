const schedule = require('node-cron')
const a = require('node-schedule')

schedule.schedule("* 10 11 * * *", function () {
  console.log(11111);
})
let b = schedule.schedule(" * 10 11 * * *", () => {
  console.log(22222);
})
b.start()

setTimeout(() => { 
  for (let t of schedule.getTasks().values()) { 
    console.log(t.stop());
  }
},3000)
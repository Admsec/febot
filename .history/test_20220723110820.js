const schedule = require('node-cron')
const a = require('node-schedule')

schedule.schedule("* 29 10 * * *", function () {
  console.log(11111);
})
let b = schedule.schedule(" * 06 11 * * *", () => {
  console.log(22222);
})
b.start()
for (let t of schedule.getTasks().values()) { 
  console.log(t.stop());
}
setTimeout(() => { 
},3000)
const { bot, masters } = require('../index')
const fs = require('fs')
const crypto = require('crypto')
const https = require('https')

function downOnlinePic(event) {
  // 备忘：判断是否是 master
  if (event.raw_message.substring(1, 5) === '上传图片' && masters.includes(event.sender.user_id) ) {
    bot.logger.info('触发插件：plugin-downOnliePic')
    // 文件名：随机生产 8 个字符串，文件后缀：+为 .jpg ，-为 .png
    let picUrl, fix;
    let randomstr = crypto.randomBytes(8).toString('hex');
    event.raw_message.substring(0, 1) === '+' ? fix = '.jpg' : event.raw_message.substring(0, 1) === '-'
      ? fix = '.png' : fix = null;
    // 加个判断以免报错导致机器人停止运行，下同
    if (!fix) {
      event.reply("[-]请输入正确的前缀！前缀+为jpg格式，前缀-为png格式");
      return;
     }
    // 获取图片下载url
    event.message.find((item) => { if (item.url) picUrl = item.url; })
    if (!picUrl) {
      event.reply("[-]ERROR：请输入正确的图片！");
      return;
    }
    event.reply('[+]获取到图片url：' + picUrl)
    https.get(picUrl, res => { 
      res.setEncoding('binary') // 下载一定要是 Byte 类型
      let data = '';
      event.reply('[*]文件上传中')
      res.on('data', (chunk) => data += chunk)
      res.on('end', () => { 
        // 保存路径(str)，被写入的文件，编码格式
        fs.writeFileSync(`data/qqUpload/${randomstr}${fix}`,data,'binary')
        event.reply('[+]文件上传成功,保存路径：data/qqUpload/' + randomstr + fix)
      }).on('error', err => { 
        event.reply('[-]ERROR：' + err)
      })
    })
  }
}
bot.on('message', downOnlinePic)
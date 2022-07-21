const crypto = require('crypto')
const https = require('https')
const fs = require('fs')
let a = {
  message: [
    { type: 'text', text: '1丁敏' },
    {
      type: 'image',
      file: '10de0b5a694da9d4f60416eb76d46a0b15177-270-259.jpg',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/0//1711798892-1331536704-10DE0B5A694DA9D4F60416EB76D46A0B/0',
      asface: false
    }
  ]
}

function downOnlinePic(event) {
  // 备忘：判断是否是 master
  if (event.raw_message.substring(1, 5) === '上传图片') {
    let picUrl, fix;
    let randomstr = crypto.randomBytes(8).toString('hex');
    event.raw_message.substring(0,1) === '+' ? fix = '.jpg' : fix = '.png';
    event.raw_message.message.find((item) => { if (item.url) picUrl = item.url; })
    https.get(url, res => { 
      res.setEncoding('binary') // 下载一定要是 Byte 类型
      let data = '';
      res.on('data', (chunk) => { 
        data += chunk
        event.reply('[*]文件上传中')
      })
      res.on('end', () => { 
        fs.writeFileSync('../data/qqUpload' + randomstr + fix,data,'binary')
        event.reply('[+]文件上传完成,保存路径：data/qqUpload' + randomstr + fix)
      })
    })

  }
}
downOnlinePic()

// const fs = require('fs')
// const https = require('https')

// https.get(url, (res) => { 
//   let data = '';
//   res.setEncoding('binary');
//   res.on('data', (chunk) => {
//     data += chunk
//   })
//   res.on('end', () => { 
//     fs.writeFileSync('1.jpg', data, 'binary')
//   })
// })
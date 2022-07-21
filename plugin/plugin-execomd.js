const oicq = require('oicq')
const child_process = require('child_process')
const { bot, masters } = require('../index')
/* 
 * cp936 是 gbk, 936 是因为 IBM 发明代码页时, gbk 在代码页的第 936 页
 * 解决中文乱码模块
 */
const iconv = require('iconv-lite')
const encoding = 'cp936'

function executeCommand(event) {
  // 判断函数触发条件
  if ((~event.raw_message.indexOf("执行")) && masters.includes(event.sender.user_id)) {
    let command = event.raw_message.replace(/执行/, '')
    child_process.exec(command, {
      encoding: 'binary'
    }, (err, stdio) => {
      (err) ? event.friend.sendMsg('ERROR：未知命令：' + command) :
        event.friend.sendMsg(iconv.decode(Buffer.from(stdio, 'binary'), encoding));

    })
  }
}
bot.on("message.private", executeCommand)
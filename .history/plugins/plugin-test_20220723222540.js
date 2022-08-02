const { segment } = require('oicq');
const { bot } = require('../index')
const https = require('https');
const schedule = require('node-schedule')

// 来源：https://v1.hitokoto.cn/
https.get('https://v1.hitokoto.cn/?c=d&c=i&c=k&encode=text&charset=utf-8', (res) => { 
  data = '';

})
"use strict"
const { segment } = require("oicq")
const { bot } = require("../index")



// hello world
bot.on("message", function (msg) {
	if (msg.raw_message === "hello")
		msg.reply("hello world", true) //改为false则不会引用
})

// 一言
bot.on("message", () => {
	if () {
		https.get('https://v1.hitokoto.cn/?c=d&c=i&c=k&encode=text&charset=utf-8', (res) => {
			data = '';
			res.on("data", (chunk) => {
				data += chunk;
			})
			res.on("end", () => {
				bot.setSignature(data)
				bot.sendPrivateMsg(1711798892, data)
			})
		})
	 }
})

// 撤回和发送群消息
bot.on("message.group", function (msg) {
	if (msg.raw_message === "dice") {
		// 撤回这条消息
		msg.recall()
		// 发送一个骰子
		msg.group.sendMsg(segment.dice())
		// 发送一个戳一戳
		msg.member.poke()
	}
})

// 接收戳一戳
bot.on("notice.group.poke", function (e) {
	if (e.target_id === this.uin)
		e.group.sendMsg("Dont poke me！我的脸可不是面粉捏的！！！")
})

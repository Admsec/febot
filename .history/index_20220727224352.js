"use strict"
const { createClient } = require("oicq")
const fs = require('fs')

const bot = createClient(2033206638, {platform : 2})
const masters = [1711798892]

// 密码登录
bot.on("system.login.slider", function (e) {
		console.log("输入ticket：")
		process.stdin.once("data", ticket => this.submitSlider(String(ticket).trim()))
		}).login("5201314wjf")

bot.once("system.online", function () {
	for (let master of masters) {
		bot.sendPrivateMsg(master,`> 机器人登录成功ヾ(≧▽≦*),成功加载好友${this.fl.size}个,群聊${this.gl.size}个`)
	}
})

process.on("unhandledRejection", (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})
	
exports.bot = bot;
exports.masters = masters;

// 批量加载插件，下划线
(async function loadPlugins() {
	fs.readdir('plugins', (error, dirList) => { 
		if (error) { 
			bot.logger.error(`[-]插件导入错误:${error}`)
			return;
		}
		for (let plug of dirList) {
			if (plug[0] === '_') continue;
			require(`./plugins/${plug}`)
			bot.logger.info(`成功加载插件：${plug}`)
		}

	})
})()
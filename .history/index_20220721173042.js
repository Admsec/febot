"use strict"
const { createClient } = require("oicq")

const account = 1447007223

const bot = createClient(account, { platform: 5 })

const masters = [1711798892]

// 密码登录
bot
	.on("system.login.slider", function (e) {
		console.log("输入ticket：")
		process.stdin.once("data", ticket => this.submitSlider(String(ticket).trim()))
		}).login()

// bot
// 	.on("system.login.qrcode", function (e) {
// 		this.logger.mark("扫码后按Enter完成登录")
// 		process.stdin.once("data", () => {
// 			this.login()
// 		})
// 	}).login()

exports.bot = bot
exports.masters = masters

// template plugins
require("./plugin/plugin-hello") //hello world
require("./plugin/plugin-image") //发送图文和表情
require("./plugin/plugin-request") //加群和好友
// require("./plugin/plugin-downPic.js") //监听上线事件
require("./plugin/plugin-setu")
require("./plugin/plugin-execomd")
require("./plugin/plugin-sendLike")
require("./plugin/plugin-uploadFs.js")
// require("./plugin/plugin-test.js")

bot.on("system.online", function () {
	for (let master of masters) {
		bot.sendPrivateMsg(master,`> 机器人登录成功ヾ(≧▽≦*),成功加载好友${this.fl.size}个,群聊${this.gl.size}个`)
	}
	// 你的账号已上线，你可以做任何事
	// console.log(`来自plugin-online: 我是${this.nickname}(${this.uin})，我有${this.fl.size}个好友，${this.gl.size}个群`)
})

process.on("unhandledRejection", (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})

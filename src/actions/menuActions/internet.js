const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');
module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    await ctx.deleteMessage()
    User.findOne({ID: ctx.update.callback_query.from.id}, (err,user) => {
        if(user.language == 'UA') {
            ctx.reply('Щось відповідаємо', Markup.inlineKeyboard(menuModel.ukrainianMenu))
        } else {
            ctx.reply('Что-то отвечаем', Markup.inlineKeyboard(menuModel.russianMenu))
        }
    })
}
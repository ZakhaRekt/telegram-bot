const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');
module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    await ctx.deleteMessage()
    User.findOne({ID: ctx.update.callback_query.from.id}, (err,user) => {
        if(user.language == 'UA') {
            ctx.reply(words.UkrainianAnswers.internet, Markup.inlineKeyboard(menuModel.ukrainianMenu))
            ctx.telegram.sendLocation(ctx.chat.id, 46.0056275, 8.9486832)
        } else {
            ctx.reply(words.RussianAnswers.internet, Markup.inlineKeyboard(menuModel.russianMenu))
            ctx.telegram.sendLocation(ctx.chat.id, 46.0056275, 8.9486832)
        }
    })
}
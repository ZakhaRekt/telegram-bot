const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');
module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    await ctx.deleteMessage()
    User.findOne({ID: ctx.update.callback_query.from.id}, (err,user) => {
        if(user.language == 'UA') {
            ctx.reply(words.UkrainianAnswers.home, Markup.inlineKeyboard(menuModel.ukrainianMenu))
            ctx.telegram.sendLocation(ctx.chat.id, 46.1509189, 8.9419973)
        } else {
            ctx.reply(words.RussianAnswers.home, Markup.inlineKeyboard(menuModel.russianMenu))
            ctx.telegram.sendLocation(ctx.chat.id, 46.1509189, 8.9419973)
        }
    })
}
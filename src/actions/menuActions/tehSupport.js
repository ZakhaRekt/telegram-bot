const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');

module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    await ctx.deleteMessage()
    User.findOne({ID: ctx.update.callback_query.from.id}, async (err,user) => {
        if(user.language == 'UA') {
            await ctx.reply(words.UkrainianAnswers.tehSupport, Markup.inlineKeyboard(menuModel.ukrainianMenu))
    
        } else {
            await ctx.reply(words.RussianAnswers.tehSupport, Markup.inlineKeyboard(menuModel.russianMenu))
        }
    })
}
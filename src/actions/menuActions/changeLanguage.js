const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');
module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    User.findOne({ID: ctx.update.callback_query.from.id}, async (err,user) => {
        if(err) console.log(err)
        if(!user) return ctx.reply('Contact with Tehnical Specialist => DBerror | changeLanguage');
        if(user.language == 'UA') {
            user.language = 'RU';
            await user.save().catch(err => console.log(err))
            await ctx.reply('Язык изменён', Markup.removeKeyboard())
            await ctx.reply('Выберите вопрос', Markup.inlineKeyboard(menuModel.russianMenu))
        } else {
            user.language = 'UA';
            await user.save().catch(err => console.log(err))
            await ctx.reply('Мову змінено', Markup.removeKeyboard())
            await ctx.reply('Оберіть питання', Markup.inlineKeyboard(menuModel.ukrainianMenu))
        }
    })
}
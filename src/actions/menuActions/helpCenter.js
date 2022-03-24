const {Markup} = require('telegraf');
const menuModel = require('../../../menuModel');
const words = require('../../../words');
const User = require('../../data/user');
module.exports = async (bot,ctx) => {
    await ctx.answerCbQuery()
    await ctx.deleteMessage()
    User.findOne({ID: ctx.update.callback_query.from.id}, async (err,user) => {
        if(user.language == 'UA') {
            await ctx.reply(words.UkrainianAnswers.helpCenter, Markup.inlineKeyboard(menuModel.ukrainianMenu))
            await ctx.reply('Центр цивільного захисту (тимчасове місце проживання):')
            await ctx.telegram.sendLocation(ctx.chat.id, 46.1509189, 8.9398086)
            await ctx.reply('Склад (тимчасове/одноразове одержання предметів першої необхідності):')
            await ctx.telegram.sendLocation(ctx.chat.id, 46.0225864, 8.9664832)
        } else {
            await ctx.reply(words.RussianAnswers.helpCenter, Markup.inlineKeyboard(menuModel.russianMenu))
            await ctx.reply('Центр гражданской защиты (временное место проживания): ')
            await ctx.telegram.sendLocation(ctx.chat.id, 46.1509189, 8.9398086)
            await ctx.reply('Склад (временное/одноразовое получение предметов первой необходимости):')
            await ctx.telegram.sendLocation(ctx.chat.id, 46.0225864, 8.9664832)
        }
    })
}
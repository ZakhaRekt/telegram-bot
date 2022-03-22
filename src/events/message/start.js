const { Telegraf, Markup } = require('telegraf');
const User = require('../../data/user');
const words = require('../../../words')
module.exports = async (bot,ctx) => {
    if(ctx.message.from.is_bot) return;
    if(ctx.message.chat.type != 'private') {
        await ctx.replyWithPhoto({url: 'https://horrorzone.ru/uploads/_pages3/96827/penis_duenn_normalebrille.png'})
        return await ctx.telegram.leaveChat(ctx.message.chat.id);
    }
    await ctx.deleteMessage();
    User.findOne({ID: ctx.message.from.id}, (err,user) => {
        if(err) console.log(err);
        if(!user) {
            const newBotUser = new User({
                ID: ctx.message.from.id,
                username: ctx.message.from.username,
                firstName: ctx.message.from.first_name,
                lastName: ctx.message.from.last_name,
                language: ctx.message.from.language_code.toUpperCase(),
                messages: 1,
                languageSelected: false,
                joinTime: Date.now(),
                lastMessageTime: Date.now()
            });
            ctx.reply(`✌ Выберите язык / Оберіть мову ✌`, Markup.keyboard(
                [
                    [Markup.button.text('RU',false), Markup.button.text('UA',false)]
                ]
            ))
            return newBotUser.save().then(u => console.log(`Saved new user: ${u.username}`))
        }
        if(user.languageSelected) {
            if(user.language == 'RU') {
                ctx.reply(`Выберите что вам нужно`, Markup.keyboard([
                    [Markup.button.text(words.RussianButtons.help), Markup.button.text(words.RussianButtons.teh)]
                ]))
            } else {
                ctx.reply(`Оберіть що вам потрібно`, Markup.keyboard([
                    [Markup.button.text(words.UkrainianButtons.help), Markup.button.text(words.UkrainianButtons.teh)]
                ]))
            }
        } else {
            ctx.reply(`✌ Выберите язык / Оберіть мову ✌`, Markup.keyboard(
                [
                    [Markup.button.text('RU',false), Markup.button.text('UA',false)]
                ]
            ))   
        }
    })
}
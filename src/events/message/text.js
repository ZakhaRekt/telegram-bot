const { Telegraf, Markup } = require('telegraf');
const User = require('../../data/user');
const words = require('../../../words');
const menuModel = require('../../../menuModel');


module.exports = async(bot, ctx) => {
    await ctx.deleteMessage()
    await User.findOne({
        ID: ctx.message.from.id,
    }).then((user) => {
        if (!user) {
            const newBotUser = new User({
                ID: ctx.message.from.id,
                username: ctx.message.from.username,
                firstName: ctx.message.from.first_name,
                lastName: ctx.message.from.last_name,
                language: ctx.message.from.language_code,
                languageSelected: false,
                messages: 1,
                joinTime: Date.now(),
                lastMessageTime: Date.now()
            });
            newBotUser.save().then(u => console.log(`Saved new user: ${u.username}`))
        } else {
            user.messages++;
            user.lastMessageTime = Date.now();


            const text = ctx.message.text;
            if (text == 'RU') {
                user.language = 'RU';
                user.languageSelected = true;
                user.save();
                return ctx.reply('Язык установлен', Markup.keyboard([
                    [Markup.button.text(words.RussianButtons.help), Markup.button.text(words.RussianButtons.tehSupport)]
                ]))
            }
            if (text == 'UA') {
                user.language = 'UA';
                user.languageSelected = true;
                user.save();
                return ctx.reply('Мову встановлено!', Markup.keyboard([
                    [Markup.button.text(words.UkrainianButtons.help), Markup.button.text(words.UkrainianButtons.tehSupport)]
                ]))
            }

            if(!user.languageSelected) {
                return ctx.reply(`✌ Выберите язык / Оберіть мову ✌`, Markup.keyboard(
                    [
                        [Markup.button.text('RU', false), Markup.button.text('UA',false)]
                    ]
                ))
            }

            if (user.language == 'UA') {
                if (words.UkrainianButtons.help == text) {
                    ctx.reply('🎈Список питань', Markup.inlineKeyboard(menuModel.ukrainianMenu).oneTime(true))
                }
                if(words.UkrainianButtons.tehSupport == text) {
                    return ctx.reply(words.UkrainianAnswers.tehSupport)
                }
            }
            else {
                if (words.RussianButtons.help == text) {
                    ctx.reply('🎈Список вопросов', Markup.inlineKeyboard(menuModel.russianMenu).oneTime(true)).catch(err => console.log(err))
                }
                if(words.RussianButtons.tehSupport == text) {
                    return ctx.reply(words.RussianAnswers.tehSupport)
                }
            }
            user.save();
        }
    });
}
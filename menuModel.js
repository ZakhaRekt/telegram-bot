const words = require('./words');
const {Markup} = require('telegraf');
module.exports = Object.freeze({
    ukrainianMenu: [
        [Markup.button.callback(words.UkrainianButtons.instruction,'instruction')],
        [Markup.button.callback(words.UkrainianButtons.homeDoc,'homeDoc')],
        [Markup.button.callback(words.UkrainianButtons.home, 'home')],
        [Markup.button.callback(words.UkrainianButtons.school, 'school')],
        [Markup.button.callback(words.UkrainianButtons.med, 'med')], 
        [Markup.button.callback(words.UkrainianButtons.work, 'work')],
        [Markup.button.callback(words.UkrainianButtons.payments, 'payments')],
        [Markup.button.callback(words.UkrainianButtons.internet, 'internet')],
        [Markup.button.callback(words.UkrainianButtons.italian, 'italian')],
        [Markup.button.callback(words.UkrainianButtons.animals, 'animals')], 
        [Markup.button.callback(words.UkrainianButtons.family, 'family')],
        [Markup.button.callback(words.UkrainianButtons.helpCenter, 'helpCenter')],
        [Markup.button.callback(words.UkrainianButtons.tehSupport, 'tehSupport')],
        [Markup.button.callback('Изменить язык', 'changeLanguage')]
    ],
    russianMenu: [
        [Markup.button.callback(words.RussianAnswers.instruction,'instruction')],
        [Markup.button.callback(words.RussianButtons.homeDoc,'homeDoc')],
        [Markup.button.callback(words.RussianButtons.home, 'home')],
        [Markup.button.callback(words.RussianButtons.school, 'school')],
        [Markup.button.callback(words.RussianButtons.med, 'med')], 
        [Markup.button.callback(words.RussianButtons.work, 'work')],
        [Markup.button.callback(words.RussianButtons.payments, 'payments')],
        [Markup.button.callback(words.RussianButtons.internet, 'internet')],
        [Markup.button.callback(words.RussianButtons.italian, 'italian')],
        [Markup.button.callback(words.RussianButtons.animals, 'animals')], 
        [Markup.button.callback(words.RussianButtons.family, 'family')],
        [Markup.button.callback(words.RussianButtons.helpCenter, 'helpCenter')],
        [Markup.button.callback(words.RussianButtons.tehSupport, 'tehSupport')],
        [Markup.button.callback('Змінити мову', 'changeLanguage')]
    ]
})


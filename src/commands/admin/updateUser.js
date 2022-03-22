const { Telegraf, Markup } = require('telegraf');
const User = require('../../data/user');
const {isAdmin} = require('../../../functions');

module.exports = (bot,ctx) => {
    let messageArray = ctx.message.text.split(" ");
    let args = messageArray.slice(1);
    if(isAdmin(ctx.message.from.id)) {
        if(!args[0]) return ctx.reply('Send username as argument to update.')
        if(!args[1]) return ctx.reply('[ 1 - FirstName, 2 - LastName, 3 - Messages ]')
        if(isNaN(+args[1])) return ctx.reply('Only number is avaible in second parametr')
        if(!args[2]) return ctx.reply('Enter the new value!')
        
        User.findOne({
            username: args[0],
        }).then((user) => {
            if (!user) {
                ctx.reply('Not member in DB for specified username!')
            } else {
                switch(+args[1]) {
                    case 1:
                        ctx.reply(`Sucsessful changed FirstName \'${user.firstName}\' to \`${args[2]}\``)
                        user.firstName = args[2];
                        return user.save();
                    case 2:
                        ctx.reply(`Sucsessful changed LastName \'${user.lastName}\' to \`${args[2]}\``)
                        user.lastName = args[2];
                        return user.save();
                    case 3:
                        if(isNaN(+args[2])) return ctx.reply('For Messages edition only number specified!')
                        ctx.reply(`Sucsessful changed Messages from \'${user.messages}\' to \`${args[2]}\``)
                        user.messages = args[2];
                        return user.save();
                    default:
                        break;
                }
            }
        });
    } else {
        ctx.reply('You don\'t have permissions to run command!')
    }
}
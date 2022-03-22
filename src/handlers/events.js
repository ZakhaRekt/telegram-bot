const {readdirSync} = require('fs');
module.exports = (bot) => {
    const load = dirs => {
        const events = readdirSync(`./src/events/${dirs}/`).filter(d => d.endsWith('.js'));
        for(let file of events) {
            const evt = require(`../events/${dirs}/${file}`);
            let eName = file.split('.')[0];
            if(file == 'start.js') {
                bot.start(evt.bind(null,bot));
            } else {
                bot.on(eName,evt.bind(null,bot));
            }
        }
    }
    ["message"].forEach(x => load(x));
    console.log('Ивенты загружены!')
}
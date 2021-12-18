const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 'GUILD_MESSAGES'] });



client.user.setStatus('dnd');
setInterval(async function(){
    client.user.setPresence({ activities: [{ name: `Hosting in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.` }] });
}, 1000);



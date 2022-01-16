const Discord = require('discord.js')
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ['GUILDS', "GUILD_MESSAGES"] });
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const CronJob = require('./node_modules/cron/lib/cron.js').CronJob;

['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord, CronJob);
})
client.login(process.env.discord_token);

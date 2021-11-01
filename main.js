const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const Messages = require("discord-messages");
const { Permissions } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, 'GUILD_MESSAGES'] });


const prefix = '-'

const fs = require('fs');

client.commands = new Discord.Collection(); 

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandfiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command)
}
client.on('ready', () => {
	console.log('Bot: Hosting in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds.');
		client.user.setStatus('online')
		client.user.setPresence({
			game: {
				name: 'Use -help',
				type: "Playing",
				url: "https://discordapp.com/"
			}
		});
	});

client.on('messageCreate', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();
	
 	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if(command === 'help'){
		client.commands.get('help').execute(message, args);
	} else if(command === 'ow'){
		client.commands.get('ow').execute(message, args);
	} else if(command === 'invite'){
		client.commands.get('invite').execute(message, args);
	} else if(command === 'report'){
		client.commands.get('report').execute(message, args);
	}
	
	


});

client.login(token);
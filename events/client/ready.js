module.exports = (client) =>{
    console.log('Bot: Hosting in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds.');
	client.user.setPresence({ activities: [{ name: `Hosting in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.` }] });
	function Status() {client.user.setPresence({ activities: [{ name: `Hosting in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.` }] });}
    setInterval(Status, 600000);    
}
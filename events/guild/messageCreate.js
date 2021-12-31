const { userMention } = require("@discordjs/builders");

module.exports = (client, Discord, message)=> {
    const prefix  = process.env.prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const guildID = message.guild.id
    const channelID = message.channel.id

    if(guildID === '725009032577810453' && channelID != 791610364978659329) //makkerserver - minigame channel
        return message.channel.send('please go to <#791610364978659329>')
    if(guildID === '843894832534781982' && channelID != '921671367299043328') //test server - channel = test
        return message.channel.send('please go to <#921671367299043328>')
    if(guildID === '823261321926672444' && channelID != '823670681920340049') return //l&j - cmd channel


    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if(command) command.execute(client, message, args, Discord, userMention);
}
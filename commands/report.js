const { channelMention } = require("@discordjs/builders")

module.exports = {
    name: 'report',
    description: 'this is a report command!',
    execute(message, args){
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Reports',
            url: 'https://discord.gg/xF7C3Cf37j',
            
    }
    message.channel.send({ embeds: [exampleEmbed] });}
    
}
const { channelMention } = require("@discordjs/builders")

module.exports = {
    name: 'report',
    description: 'this is a report command!',
    execute(message, args){
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Reports',
            url: 'https://discord.gg/xF7C3Cf37j',
            fields: [
                {
                    name: `Report`,
                    value: `Report [hier](https://discord.gg/xF7C3Cf37j)
                    werkt de link niet? MSG <@642288908381585408>`,
                },
            ]
            
    }
    message.channel.send({ embeds: [exampleEmbed] });}
    
}

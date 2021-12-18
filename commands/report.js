module.exports = {
    name: 'report',
    description: 'this is a report command!',
    execute(message, args){
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Report',
            url: 'https://discord.gg/xF7C3Cf37j',
            fields: [
                {
                    name: `Report`,
                    value: `Report [here](https://discord.gg/xF7C3Cf37j)
                    if that didnt work, MSG <@642288908381585408>`,
                },
            ]
            
    }
    message.channel.send({ embeds: [exampleEmbed] });}
    
}

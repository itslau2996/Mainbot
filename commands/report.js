module.exports = {
    name: 'report',
    description: 'this is a report command!',
    execute(client, message, args, Discord){
        const reportEmbed = {
            color: 0x0099ff,
            title: 'Report',
            url: 'https://discord.gg/xF7C3Cf37j',
            fields: [
                {
                    name: `Report`,
                    value: `Report [here](https://discord.gg/xF7C3Cf37j)`,
                },
            ]
            
    }
    message.channel.send({ embeds: [reportEmbed] });}
    
}

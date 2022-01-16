const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'this is a help command!',
    execute(client, message, args, Discord) {
        const Cmdembed = new Discord.MessageEmbed()
            .setColor('#fff700')
            .setTitle('Commands')

            .setURL('https://discord.gg/xF7C3Cf37j')
            .addFields(
                { name: `**-topic**`, value: 'Get a random **English** topic to talk about!', inline: false },
                { name: '**-ow**', value: 'Get a random **Dutch** topic to talk about!', inline: false },
                { name: '**-help**', value: 'This message.', inline: false },
                { name: '**-invite**', value: 'Gets you the invitelink for the bot!', inline: false },
                { name: '**-report**', value: 'Gets you the invitelink for the supportserver to report mistakes inside the bot!', inline: false },
                { name: '**-userinfo**', value: 'Sends an embed with information about your profile!', inline: false },
                { name: '**-serverinfo**', value: `Sends a message with some stats of the server you're in`, inline: false },
                { name: '**-avatar**', value: 'Sends the link of your avatar + your avatar', inline: false },
                { name: '**-stats**', value: 'Get the stats of the bot!', inline: false },
            )
        const InfoEmbed = new Discord.MessageEmbed()
            .setColor('#fff700')
            .setTitle('Information')
            .setDescription('What can you do with my bot? \n**1-** keep chats alive using `-topic` or `-ow` \n **2-** some fun commands such as `-userinfo`, `serverinfo` and `stats`\n If you want to know more about this bot, please join the server using the link thats inside the title!')
            .setURL('https://discord.gg/xF7C3Cf37j')
            .addFields(
                { name: 'How to blaclist channels?', value: `1- Join the server [here](https://discord.gg/xF7C3Cf37j)\n2- make an ticket in <#927148633269358602> **use the first one**\n3- send the invite to your server, and send the channel you want people to send commands in\n4- Wait for my response` },
            )
        message.channel.send({ embeds: [Cmdembed] });
        message.channel.send({ embeds: [InfoEmbed] });
    }
}
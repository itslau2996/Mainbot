const moment = require('moment');
const Discord = require('discord.js')

module.exports = {
    name: "serverinfo",
    description: "a command which tells you the servers information!",
    execute(client, message, args, Discord) {
        const server = message.guild
        if (!server.available) return message.channelsend('server is unavailable to send this message')
        var serverIcon = message.guild.iconURL();
        let verifieded = server.verified
        let partner = server.partnered
        const members = message.guild.members.cache


        const Respsonse = new Discord.MessageEmbed()
            .setColor('#1e9afa')
            .setAuthor({ name: `${server.name}`, iconURL: serverIcon })
            .setThumbnail(serverIcon)
            .addFields(
                { name: '**General**', value: `**ServerID: **${server.id} \n**Serverowner**: <@${server.ownerId}>\n**Serverdescription**: ${server.description}\n**Server created at:** ${moment(server.createdAt).format('Do MMMM YYYY, H:mm:ss')}`, inline: false },
                { name: '**Numbers**', value: `${server.channels.cache.size} **Channels**\n${members.filter(member => !member.user.bot).size} **Members**\n${members.filter(member => member.user.bot).size} **Bots**\n${server.emojis.cache.size} **emotes**\n${server.roles.cache.size} **Roles**\n${server.premiumSubscriptionCount} **Boosts**` },
                { name: '**Misc**', value: `**Verified:** ${verifieded}\n**Partner:** ${partner}\n**Boostlevel: **${server.premiumTier}`, inline: false }


            )

        message.channel.send({ embeds: [Respsonse] });
    }
}
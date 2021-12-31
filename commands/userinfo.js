const moment = require('moment');
const Discord = require ('discord.js')

module.exports = {
    name: "userinfo",
    description: "a command which tells you your information!",
    execute(client, message, args, Discord){
        const Target = message.author
        const Member = message.guild.members.cache.get(message.author.id)

        const Respsonse = new Discord.MessageEmbed()
            .setAuthor({name: `${Target.username}`, iconURL: Target.displayAvatarURL({dynamic: true}), url: 'https://discord.gg/xF7C3Cf37j'})
            .setThumbnail(Target.displayAvatarURL({dynamic: true}))
            .addFields(
                { name: 'UserID', value: `${Target.id}`, inline: false },
                { name: 'roles', value: `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, inline: false},
                { name: 'Servermember Since:', value: `${moment(Member.joinedAt).format('MMMM Do YYYY, H:mm:ss')}\n **-** ${moment(Member.joinedAt).startOf('day').fromNow()}`, inline: false},
                { name: 'Discorduser Since:', value: `${moment(Target.createdAt).format('MMMM Do YYYY, H:mm:ss')}`, inline: false},
            )
        
        message.channel.send({ embeds: [Respsonse]});
    }
}
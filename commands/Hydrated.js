
module.exports = {
    name: 'hydrate',
    aliases: ['eat', 'drink', 'hydrated', 'eet'],
    execute(client, message, args, Discord) {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Self Care Reminder')
        .setDescription('Make sure to eat something and stay hydrated! Stay safe and take care<3')
        message.channel.send({ embeds: [Embed] })
    }
}
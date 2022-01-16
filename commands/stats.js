module.exports = {
    name: "stats",
    execute(client, message, args, Discord) {
        function Conferterseconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        let Uptimebot = Conferterseconds(client.uptime)
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: 'Theezakje', iconURL: 'https://cdn.discordapp.com/icons/843894832534781982/833a70113d12a7d5bd1d00c6ca500217.webp' })
            .setThumbnail('https://cdn.discordapp.com/icons/843894832534781982/833a70113d12a7d5bd1d00c6ca500217.webp')
            .addFields(
                { name: 'Stats', value: `**Servers:** ${client.guilds.cache.size}\n**Channels:** ${client.channels.cache.size}\n**Online for:** ${Uptimebot}`, inline: false },
            )
        message.channel.send({ embeds: [embed] });
    }
};
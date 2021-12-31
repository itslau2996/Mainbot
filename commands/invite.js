module.exports = {
    name: 'invite',
    description: 'this is a invite command!',
    execute(client, message, args, Discord){
        const InviteEmbed = {
        color: 0x0099ff,
        title: 'invite the bot',
        url: 'https://discord.com/oauth2/authorize?client_id=898599750612447263&scope=bot&permissions=117760&redirect_uri=https%3A%2F%2Fdiscord.gg%2FxF7C3Cf37j',

        fields: [
            {
            name: 'help',
            value: `if the link doesn't work, join the supportserver`,
            inline: true
            },
        ],
        footer: {
            text: 'https://discord.gg/xF7C3Cf37j',
        },
        }
    message.channel.send({ embeds: [InviteEmbed] });}
    
}
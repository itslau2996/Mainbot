module.exports = {
    name: 'invite',
    description: 'this is a invite command!',
    execute(message, args){
        const InviteEmbed = {
        color: 0x0099ff,
        title: 'Gebruik deze link om de bot te inviten',
        url: 'https://discord.com/oauth2/authorize?client_id=898599750612447263&scope=bot&permissions=117760&redirect_uri=https%3A%2F%2Fdiscord.gg%2FxF7C3Cf37j',

        fields: [
            {
            name: 'help',
            value: `Als de link niet werkt, dm <@642288908381585408>`,
            inline: true
            },
        ],
        footer: {
            text: 'Some footer text here',
            icon_url: '<https://discord.gg/xF7C3Cf37j>',
        },
        }
    }
}

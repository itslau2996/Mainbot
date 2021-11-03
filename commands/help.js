module.exports = {
    name: 'help',
    description: 'this is a help command!',
    execute(message, args){
            const HelpEmbed = {
            color: 0x0099ff,
            title: 'HELP',
            url: 'https://discord.gg/xF7C3Cf37j',

            fields: [
                {
                    name: 'Mijn commands',
                    value: 'Het prefix is -, voor meer help. Nog steeds vast? Join de support server door te klikken op de titel.',
                },
                {
                    name: '-Help',
                    value: 'Dit command.',
                    inline: true,
                },
                {
                    name: '-Invite',
                    value: 'Coming soon',
                    inline: true,
                },
                {
                    name: '-ow',
                    value: 'Krijg een random onderwerp om over te praten!',
                    inline: true,                              
                },
                {
                    name: '-ping',
                    value: 'makkelijkste om te kijken of de bot online is!',
                    inline: true,
                },
                {
                    name: '-report',
                    value: 'Report fouten door de support server te joinen!',
                    inline: true,
                },
            ]
        }
        message.channel.send({ embeds: [HelpEmbed] }); 
    }
}
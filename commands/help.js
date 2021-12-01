module.exports = {
    name: 'help',
    description: 'this is a help command!',
    execute(message, args){
            const HelpEmbed = {
            color: 0x0099ff,
            title: 'Commands',
            url: 'https://discord.gg/xF7C3Cf37j',

            fields: [
                {
                    name: 'My Commands',
                    value: `The prefix is '-' ,if you need more help join the support server using the link-title, or dm me <@642288908381585408>`
                },
                {
                    name: '-Help',
                    value: 'This command.',
                    inline: true,
                },
                {
                    name: '-Invite',
                    value: 'Get the bot invite link',
                    inline: true,
                },
                {
                    name: '-ow or -topic',
                    value: 'get a random topic to talk about!',
                    inline: true,                              
                },
                {
                    name: '-report',
                    value: 'Report mistakes by joining the support-server!',
                    inline: true,
                },
                {
                    name: '-quote',
                    value: 'get a random quote. You can send these in using the support-server!',
                    inline: true,
                },
                ]
        }
        message.channel.send({ embeds: [HelpEmbed] }); 
    }
}
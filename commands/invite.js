module.exports = {
    name: 'invite',
    description: 'this is a invite command!',
    execute(message, args){
    message.channel.send(`
    mijn invitelink!
    https://discord.com/oauth2/authorize?client_id=898599750612447263&scope=bot&permissions=3072
    `)
    }
}
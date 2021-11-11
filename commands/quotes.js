const talkedRecently = new Set();
module.exports = {
    name: 'ow',
    description: 'this is a ping command!',
    execute(message, args){
        const messages = []
        message.channel.send(`coming soon`)
    }
}
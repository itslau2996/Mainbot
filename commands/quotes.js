const askedForQuote = new Set();
module.exports = {
    name: 'quotes',
    description: 'quotes',
    execute(message, args){
        const messages = ["send quotes in via the support server! <https://discord.gg/zVp77HTPFK> ", "send quotes in via the support server! <https://discord.gg/zVp77HTPFK>"]
        if (askedForQuote.has(message.author.id)){
            message.channel.send(`wait another 20 seconds before you can do this - ` + `${message.author}`);
            } else {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                message.channel.send(randomMessage)
    
                askedForQuote.add(message.author.id);
                setTimeout(() => {
                    askedForQuote.delete(message.author.id);
                }, 20000);
            }
    }
}
    
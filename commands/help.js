module.exports = {
    name: 'help',
    description: 'this is a help command!',
    execute(message, args){
    message.channel.send(`
    Dit zijn mijn commands

    **-help**  - dit command
    **-ping**  - test command
    **-ow**    - Geeft je een random onderwerp om over te praten!
    **-invite**- hiermee krijg je de invite link!
    `)
    }
}
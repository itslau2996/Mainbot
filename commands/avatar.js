module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    execute(client, message, args, Discord) {
        message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
    }
}
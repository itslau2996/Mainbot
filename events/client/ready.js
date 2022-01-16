const CronJob = require('../../node_modules/cron/lib/cron').CronJob
module.exports = (client, Discord) => {
    console.log('Bot: Hosting in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds.');
    client.user.setPresence({ activities: [{ name: `Hosting in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.` }] });
    function Status() { client.user.setPresence({ activities: [{ name: `Hosting in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.` }] }); }
    setInterval(Status, 600000);

    console.log('Before job instantiation');
    const job = new CronJob('* * 10,18 * * *', function () {
        const Hydratedmsg = new Discord.MessageEmbed()
            .setTitle('Self Care Reminder')
            .setDescription('Make sure to eat something and stay hydrated! Stay safe and take care<3')
        console.log(`job started!`)
        client.channels.cache.get('channelid it supposed to go').send({ embeds: [Hydratedmsg] })
    });
    console.log('After job instantiation');
    job.start();

}

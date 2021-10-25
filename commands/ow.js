module.exports = {
    name: 'ow',
    description: 'this is a ping command!',
    execute(message, args){
        const messages = ["#1 Welk seizoen vind jij het leukst?", "#2 Wat is jouw favoriete LOG seizoen?", "#3 Wat is jouw favoriete tijd van je leven?", "#4 Wat doe jij het liefst 'savonds?", "#5 Hoe zou jij je kind noemen en waarom?",
    "#6 Wat zou jij graag nog een keer doen in jouw leven?", "#7 Welk land wil jij nog heel graag bezoeken?", "#8 Welk vak haat je het meest en waarom?"
    ]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage)  
    }
}
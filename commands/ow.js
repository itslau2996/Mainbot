
const talkedRecently = new Set();
module.exports = {
    name:   'topic',
    description: 'this is a topic command!',
    execute(message, args){
        const messages = ["#1 Which season do you like the most", "#2 Whats your favorite MCC?", "#3 What is your favorite moment of your life", "#4 How do you wanna name your kid?",
    "#5 What is something you really want to do in your life?", "#6 Which country you would like to visit once?", "#7 Which subject do you hate and why?"
    , "#8 How often are you awake after 01:00?", 
    "#9 Are you afraid of the dark?", "#10 Have you ever been in real danger?", 
    "#10 What do you do to relax? ",  "#11 Who is the person that makes you the happiest?", "#12 If you're stressed, what is that one thing you do to relax?",  
    "#13 If you had too chance your name, what would it chance too?",  "#14 What period in your life you want to do again?", "#15 Where do you spend the most time in your house?", 
    "#22 What is the weirdesst dream you ever had?", "#22 What is something you would like to chance about yourself?", "#23 Who has the most influence in your life?", 
    "#24 What is the place you like the most?",  "#25 Where did you go on your last vacation?",  "#26 What do you like the most about work/school?", 
    "#27 Who's your favorite artist?", "#28 ?",
    "#30 Are u able to present to big groups?",
    "#31 What is that one thing that you're really good at?", "#32 What is your favorite place in your house?",
    ,"#34 Do you like pets?",
    "#35 What is the last project you put the most time in?", "#36 What is your favorite possesion?" ,
    "#37 Which three words describe you the best?", "#39 What is your biggest talent?",
    "#40 What is the best present you ever had on a birthday?", "#42 If you had to start a company, what would it do?"
    ,"#43 What do you like to do to spend your time?", "#44 What would you say to your younger self?",
    "#45 How does your favorite weekend look like?", "#46 Which sort of news do you follow daily?",
    "#47 If you could choose to be immortal, would you do that?", "#48 What kind of animal are you?"
    ," #49 Would you rather be able to fly like a bird or be able to swim like a fish?",
    , "#50 Would you rather have the ability to read minds or the ability to fly?",
    "#51 Denk je dat mensen ooit iets zullen uitvinden dat tijdreizen mogelijk maakt?",
    "52 Wat is volgens jou de grootste uitvinding in de komende 5 jaar?",
    "#53 Denk je dat technologie onze levens beter of slechter maakt?",
    "#54 Maakt de technologie het leven eenvoudiger of gecompliceerder?", 
    "#55 Als je 500 jaar terug in de tijd kon reizen en slechts één stukje technologie kon meenemen, wat zou je kiezen?"   ,
    "#56 Denk je dat de wereld er over 25 jaar helemaal anders zal uitzien?",
    "#57 Wat is de mogelijkheid waar je het meest enthousiast over bent voor de toekomst?",
    "#58 Welke technologie die momenteel worden ontwikkeld heeft volgens jou de meeste mogelijkheden?",
    "#59 Welke technologie of ontdekking denk je dat de wereld het meest heeft veranderd?",
    "#60 Wat denk je dat het volgende wereldveranderende stukje technologie zal zijn?",
    "#61 Welke wetenschappelijke vooruitgang of technologie denk je dat het slechtst is voor de wereld?",
    "#62 Wat staat bovenaan op je bucketlist?",
    "#63 Wat is belangrijker voor je; geld, carrière of familie?",
    "#64 Als je aan de toekomst denkt, wat voor beeld zie je dan voor je?",
    "#65 Wanneer wil je met pensioen gaan?",
    "#66 Wat wil je het komende jaar bereiken?",
    "#67 Wil je de wereld veranderen of een stukje van de maatschappij?",
    "#68 Welke impact hebben jouw ouders op je toekomstverwachtingen?",
    "#69 *nice* Wat voor een huis wil je later bezitten?",
    "#70 Waar ben je het meest trots op in je leven?",
    "#71 Zijn je doelen en prioriteiten veranderd naarmate je ouder bent geworden?",
]

    if (talkedRecently.has(message.author.id)){
        message.channel.send(`wait another minute before you can do this - ` + `${message.author}`);
        } else {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage)

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 60000);
    }
}
}

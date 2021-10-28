const talkedRecently = new Set();
module.exports = {
    name: 'ow',
    description: 'this is a ping command!',
    execute(message, args){
        const messages = ["#1 Welk seizoen vind jij het leukst?", "#2 Wat is jouw favoriete LOG seizoen?", "#3 Wat is jouw favoriete tijd van je leven?", "#4 Wat doe jij het liefst 's avonds?", "#5 Hoe zou jij je kind noemen en waarom?",
    "#6 Wat zou jij graag nog een keer doen in jouw leven?", "#7 Welk land wil jij nog heel graag bezoeken?", "#8 Welk vak haat je het meest en waarom?"
    , "#9 Hoe vaak ben je nog na 01.00 uur wakker?", 
    "#10 Ben je wel eens bang in het donker?", "#11 Wat staat bovenaan je bucketlist?", "#12 Wat waren je favoriete televisieshows toen je jong was?", "#13 Ben je ooit in echt gevaar geweest?", "#15 Wat zou je liever hebben; een droomauto of een geweldig huis?", 
    "#16 Wat is je “guilty pleasure” als je kan ontspannen?",  "#17 Wie is de persoon in je leven die je het gelukkigst maakt?", "#18 Als je gestrest bent, wat doe je dan om te ontspannen?",  
    "#19 Als je een nieuwe voornaam zou mogen kiezen, wat zou het dan worden?",  "#20 Als je een periode in je leven opnieuw zou kunnen doen, wat kies je dan? #21 Waar breng je gedurende de dag de meeste tijd door?", 
    "#22 Wat is de gekste droom die je ooit hebt gehad?", "#22 Is er iets gebeurd in je leven dat niet te verklaren valt?", "#23 Wie heeft een belangrijke rol gespeeld in hoe jij nu bent?", 
    "#24 Wat is de mooiste plek die je ooit hebt bezocht?",  "#25 Waar ben je geweest op je laatste vakantie?",  "#26 Wat vind je leuk aan je werk/school?", 
    "#27 Wie is je favoriete artiest?", "#28 Ben je graag actief als je vrij bent of wil je dan ontspannen?",
    "#29 Ben je nog steeds vrienden met een basisschoolvrienden?", "#30 Kun je zonder problemen een toespraak voor een groep houden?",
    "#31 Wat is het enige waar je de beste in bent?", "#32 Waar hang je het liefst in je huis rond?",
    "#33 Houd je van reality-tv?", "#34 Hoe voel je je over huisdieren?",
    "#35 Wat was het laatste project waar je je voor 100% hebt ingezet om het zo goed mogelijk af te maken?", "#36 Wat is je favoriete bezit?" ,
    "#37 Welke drie woorden beschrijven jou het beste?", "#38 Wie bewonder je?", "#39 Wat is je meest nutteloze talent?",
    "#40 Wat is het beste cadeau dat je ooit op je verjaardag hebt gekregen?", "#42 Als je zelf een bedrijf zou starten, wat zou je dan beginnen?"
    ,"#43 Wat is je favoriete manier om je tijd te verdoen?", "#44 Wat zou je je tegen je jongere zelf zeggen",
    "#45 Hoe ziet je perfecte weekend eruit?", "#46 Welk soort nieuws volg je dagelijks?",
    "#47 Als je kon kiezen om onsterfelijk te zijn, zou je het dan willen?", "#48 Wat voor soort dier zou je zijn als je een dier zou kunnen zijn?"
    ," #49 Zou je liever in staat zijn om als een vogel te vliegen of onder water te ademen als een vis?",
    , "#50 Zou je liever het vermogen hebben om te vliegen of om gedachten te lezen?",
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
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`calm down, wacht nog 10 minuten met dit command uitvoeren- ` + `${message.author}`);
        } else {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage)  
       // the user can type the command ... your command code goes here :)

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after 10 minutes
      talkedRecently.delete(message.author.id);
    }, 600000);
}

       
    }
}
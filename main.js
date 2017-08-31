var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');
var cards = [];

inquirer.prompt([{
    type: "list",
    name: "cardChoice",
    message: "Which card type do you want to practice with?",
    choices: ["Basic Flashcards", "Cloze Flashcards"]
}]).then(function (cardType) {
    switch (cardType.cardChoice) {
        case "Basic Flashcards": {
            runBasic();
            break;
        }
        case "Cloze Flashcards": {
            runCloze();
            break;
        }
    }
})

function runBasic() {
    console.log("\nAfter each card is shown, Press Ener to flip the card and see the next\n");
    cards.push(new basicCard("This computer was the first portable computer?", "Osborne I"));
    cards.push(new basicCard("A famous Super Bowl advertisement, from 1984, announced this computer?", "Macintosh"));
    cards.push(new basicCard("The predessessor of the modern Internet?", "ARPANET"));
    cards.push(new basicCard("Paul Allen and this man created Microsoft.", "Bill Gates"));
    cards.push(new basicCard("IBM created this computer and won playing against Gary Kasparov in chess?", "Deep Blue"));
    queryCard(0)
}

function runCloze() {
    console.log("\nAfter each card is shown, Press Ener to flip the card and see the next\n");
    cards.push(new clozeCard("The Osborne I was the worlds first portable computer.", "Osborne I"));
    cards.push(new clozeCard("Announced during the SuperBowl, the Macintosh would be why \"1984 won't be like 1984\".", "Macintosh"));
    cards.push(new clozeCard("Before the Internet, Universities constructed The ARPANET to link their networks together.", "ARPANET"));
    cards.push(new clozeCard("Along with Paul Allen, Bill Gates created Microsoft, and became one of the richest men in the world.", "Bill Gates"));
    cards.push(new clozeCard("In 1996, Deep Blue defeated Gary Kasparov. The first time a computer defeated a world champion in chess.", "Deep Blue"));
    queryCard(0)
}

function queryCard(i) {
    if (i < cards.length) {
        if (cards[i].front) {
            inquirer.prompt([{
                type: "confirm",
                name: "card",
                message: cards[i].front,
                default: true
            }]).then(function (qResponse) {
                console.log(cards[i].back,"\n");
                queryCard(i + 1);
            })
        }
        else {
            inquirer.prompt([{
                type: "confirm",
                name: "card",
                message: cards[i].partial,
                default: true
            }]).then(function (qResponse) {
                console.log("The answer is " + cards[i].cloze);
                console.log(cards[i].fullText,"\n");
                queryCard(i + 1);
            })
        }
    }
    else
        console.log("\nDone!");
}

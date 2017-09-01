// Card Constructor front end test code
// by Jason McKinney
// 8/31/2017
//
// Node.js script to enumerate and use the BasicCard and ClozeCard constructors
// that are modularized and made available.
//
// Uses the inquirer module from NPM to select which card type, and to control
// the card flip.
//
//
// *****************************************************************************

// Modules require statements
// *****************************************************************************
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');
//******************************************************************************

// array of cards to be constructed
var cards = [];

// inquirer to choose weither use Basic or Cloze cards
inquirer.prompt([{
    type: "list",
    name: "cardChoice",
    message: "Which card type do you want to practice with?",
    choices: ["Basic Flashcards", "Cloze Flashcards"]
}]).then(function (cardType) { // callback function when iquirer input completes
    // evaluate the response
    switch (cardType.cardChoice) {
        // if basic
        case "Basic Flashcards": {
            //run the basic card function
            runBasic();
            break;
        }
        // if cloze
        case "Cloze Flashcards": {
            // run the cloze card function
            runCloze();
            break;
        }
    }
})

//******************************************************************************
// runBasic function constructs 5 basic flash cards to the cards array
// and calls the display function
//******************************************************************************
function runBasic() {
// output instructions
    console.log("\nAfter each card is shown, Press Ener to flip the card and see the next\n");
// construct and fill 5 cards
    cards.push(new basicCard("This computer was the first portable computer?", "Osborne I"));
    cards.push(new basicCard("A famous Super Bowl advertisement, from 1984, announced this computer?", "Macintosh"));
    cards.push(new basicCard("The predessessor of the modern Internet?", "ARPANET"));
    cards.push(new basicCard("Paul Allen and this man created Microsoft.", "Bill Gates"));
    cards.push(new basicCard("IBM created this computer and won playing against Gary Kasparov in chess?", "Deep Blue"));
    // call the display function
    queryCard(0)
}

//******************************************************************************
//runCloze function constructs 5 cloze cards to the cards array
//******************************************************************************
function runCloze() {
    // output instructions
    console.log("\nAfter each card is shown, Press Ener to flip the card and see the next\n");
    // construct and fill 5 cards
    cards.push(new clozeCard("The Osborne I was the worlds first portable computer.", "Osborne I"));
    cards.push(new clozeCard("Announced during the SuperBowl, the Macintosh would be why \"1984 won't be like 1984\".", "Macintosh"));
    cards.push(new clozeCard("Before the Internet, Universities constructed The ARPANET to link their networks together.", "ARPANET"));
    cards.push(new clozeCard("Along with Paul Allen, Bill Gates created Microsoft, and became one of the richest men in the world.", "Bill Gates"));
    cards.push(new clozeCard("In 1996, Deep Blue defeated Gary Kasparov. The first time a computer defeated a world champion in chess.", "Deep Blue"));
    // call the display function
    queryCard(0)
}
//******************************************************************************
// queryCard function is a recursive algorythm that uses inquirer to
// prompt one side of a card and on an enter press displays the other or cloze
// Will detect the type of card. Argument is the index of the card array for
// recursion
//******************************************************************************
function queryCard(i) {
    // base case for recursion
    if (i < cards.length) {
        // if 'front' property exists (Thanks Cam for Truthyness)
        if (cards[i].front) {
            // do the inquirer prompt for BasicCard constructed objects
            inquirer.prompt([{
                type: "confirm",
                name: "card",
                message: cards[i].front,
                default: true
            }]).then(function (qResponse) {// callback for displaying answer
                console.log(cards[i].back,"\n");
                // iterate using recursion to avoid async problems
                queryCard(i + 1);
            })
        }
        // otherwise (assumes ClozeCard)
        // ~if 'front' property does not exist~
        else {
            // do the inquirer prompt for ClozeCard constructed objects
            inquirer.prompt([{
                type: "confirm",
                name: "card",
                message: cards[i].partial,
                default: true
            }]).then(function (qResponse) {
                console.log("The answer is " + cards[i].cloze);
                console.log(cards[i].fullText,"\n");
                // iterate using recursion to avoid async problems
                queryCard(i + 1);
            })
        }
    }
    // if iterator is out of range, print done, and pops the call stack
    else
        console.log("\nDone!");
}

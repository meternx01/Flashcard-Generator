var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");

var inquirer = require('inquirer');

inquirer.prompt([{
    type: "list",
    name: "cardChoice",
    message: "Which card type do you want to practice with?",
    choices: ["Basic Flashcards", "Cloze Flashcards"]
}]).then(function(cardType){
    switch (cardType.cardChoice){
        case "Basic Flashcards" : {
            runBasic();
            break;
        }
        case "Cloze Flashcards" : {
            runCloze();
            break;
        }
    }
})

function runBasic(){
    console.log("BASIC CARD FUNCTION");
}

function runCloze(){
    console.log("CLOZE CARD FUNCTION");
}
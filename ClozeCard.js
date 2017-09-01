// ClozeCard Constructor Module
// by Jason McKinney
// 8/31/2017
//
// Constructor for building a Cloze Flashcard object where
// there are properties for the full question, answer, and a cloze question
// where the answer is removed from the full question
//
// Is scope sensaitive - if not called with new, it will properly construct
// *****************************************************************************

//******************************************************************************
// Properly constructed object returns
// ClozeCard {
//   fullText: 'Question with answer text',
//   cloze: 'answer',
//   partial: 'Question with ... text' }
// *****************************************************************************

//ClozeCard constructor arguments are the text for question and cloze as strings
var ClozeCard = function (argText, argCloze) {
	// do argument check - if either is blank - INVALID
	if (argText == "" || argCloze == "") {
		return console.log("Invalid Arguments");
	}	// May have problem with prototyping...
	// if not called with new
	if (!(this instanceof ClozeCard)){
		// run again but with the new instance
		return new ClozeCard(argText, argCloze)
	}
	// check to find the cloze in the question - if close is in text...
	if (argText.toUpperCase().includes(argCloze.toUpperCase())) {
		// assign fullText property
		this.fullText = argText;
		// assign cloze property
		this.cloze = argCloze;
		// assemble and assign partial property
		this.partial = argText.replace(argCloze, "...");
	}
	// if cloze not in question
	else {
		// INVALID
		console.log(argCloze + " doesn't exist in " + argText);
	}
}

// export the constructor
module.exports = ClozeCard;

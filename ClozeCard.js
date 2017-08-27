var ClozeCard = function (argText, argCloze) {
	if (argText == "" || argCloze == "") {
		return console.log("Invalid Arguments");
	}
	if (!(this instanceof ClozeCard){
        return new BasicCard(argText, argCloze)
    }
	if (argText.toUpperCase().includes(argCloze.toUpperCase())) {
		this.fullText = argText;
		this.cloze = argCloze;
		this.partial = argText.replace(argCloze, "...");
	}
	else {
		console.log(argCloze + " doesn't exist in " + argText);
	}
}

module.exports = ClozeCard;
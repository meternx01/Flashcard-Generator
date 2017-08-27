var BasicCard = function (argFront, argBack) {
    if (!(this instanceof BasicCard)){
        return new BasicCard(argFront, argBack)
    }

    this.front = argFront;
    this.back = argBack;
}

module.exports = BasicCard;
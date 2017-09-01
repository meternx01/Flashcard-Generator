// BasicCard Constructor Module
// by Jason McKinney
// 8/31/2017
//
// Constructor for building a Basic Flashcard object where
// a question is stored on the front, and the back contains the answer
//
// Is scope sensaitive - if not called with new, it will properly construct
// *****************************************************************************

//******************************************************************************
// Properly constructed object returns
//  BasicCard{
// 	front: 'front',
// 	back: 'back'
// }
// *****************************************************************************
//BasicCard constructor arguments are the text for the front and back as strings
var BasicCard = function (argFront, argBack) {
    // if not called with new
    if (!(this instanceof BasicCard)){
        // run again but with the new instance
        return new BasicCard(argFront, argBack)
    }
    // assign front
    this.front = argFront;
    // assign back
    this.back = argBack;
}

// export the constructor
module.exports = BasicCard;

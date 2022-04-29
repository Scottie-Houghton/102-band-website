'use strict';

function taste () {
    let userGenre = prompt ("What is your favorite genre of music?");
    let band = prompt("Ah, a " + userGenre + " lover! What is your favorite band?");
    let guessBand = prompt("Dude! " + band + " rock!! Can you guess my favorite band?");
    // if (guessBand.toLowerCase() != "queen") {
        // prompt("Nope, but they rock, too! Try again.")
    // }
    return guessBand
}

let scottiesBand = taste ()

function firstTry (scottiesBand) {
    if (scottiesBand.toLowerCase() == "queen") {
        document.write("<p id='scotties-band'>" + "Whoa, good guess! Impressive!!" + "</p>");
    } else if (scottiesBand.toLowerCase() == "talking heads") {
        document.write("<p id='scotties-band'>" + "Oh, so close! They're actually my 2nd favorite band! Give it another shot." + "</p>");
    } else {
        document.write("<p id='scotties-band'>" + "Nope, but they rock, too!" + "</p>");
        // document.write("<p id='scotties-band'>" + "Sorry, wrong again, but another great band!" + "</p>");
    }
    return scottiesBand
}

firstTry (scottiesBand)
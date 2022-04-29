'use strict';

function taste () {
    let userGenre = prompt ("What is your favorite genre of music?");
    let band = prompt("Ah, a " + userGenre + " lover! What is your favorite band?");
    let guessBand = prompt("Dude! " + band + " rock!! Can you guess my favorite band?");
    if (guessBand.toLowerCase() == "talking heads") {
        guessBand = prompt("Actually, they're my 2nd favorite band. So close! Why don't you try again.");
    } 
    while (guessBand.toLowerCase() != "queen") {
        guessBand = prompt("Nope, but they rock, too! Try again. (Hint: Don't feel like you're 'Under Pressure,' I believe in you!)");
    }
    return guessBand
}

function firstTry (scottiesBand) {
    if (scottiesBand.toLowerCase() == "queen") {
        document.write("<p id='scotties-band'>" + "Whoa, good guess! Impressive!!" + "</p>");
    } else if (scottiesBand.toLowerCase() == "talking heads") {
        document.write("<p id='scotties-band'>" + "Oh, so close! They're actually my 2nd favorite band!" + "</p>");
    } else {
        document.write("<p id='scotties-band'>" + "Sorry, wrong again, but another great band!" + "</p>");
    }
    return scottiesBand
}
let scottiesBand = taste ()

firstTry (scottiesBand)

let rock = prompt("On a scale of 1 - 10, how dizzy do you get from headbanging?");

for (let i = 0; i < rock; i++) {
    document.write("<img id='freddie' src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F02%2Fgettyimages-823663584_preview.jpg&q=60' />")
}
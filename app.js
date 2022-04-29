'use strict';

let userGenre = prompt ("What is your favorite genre of music?");

console.log(userGenre);

let band = prompt("Ah, a " + userGenre + " lover! What is your favorite band?");

console.log(band);

let scottiesBand = prompt("Dude! " + band + " rock!! Can you guess my favorite band?");

scottiesBand.toLowerCase();

console.log(scottiesBand);

if (scottiesBand.toLowerCase() == "queen") {
    document.write("<p id='scotties-band'>" + "Whoa, good guess! Impressive!!" + "</p>");
} else if (scottiesBand.toLowerCase() == "talking heads") {
    document.write("<p id='scotties-band'>" + "Oh, so close! They're actually my 2nd favorite band!" + "</p>");
} else {
    document.write("<p id='scotties-band'>" + "Nope, but they rock, too!" + "</p>");
}
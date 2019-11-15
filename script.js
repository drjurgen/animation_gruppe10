window.addEventListener("load", sidenLoades);

function sidenLoades() {
    console.log("sidenLoades");

    // startskærm vises

    // Eventlisteners til knapper


}

function infoScreen() {
    console.log("infoScreen");

    // Infoskærm vises

    // Startskærm hides

    // Eventlisterner til hele skærmen - click
}


function startGame() {
    console.log("startGame");

    // Infoskærm hides

    // Spilskærm vises

    // Liv og point og timer nultilles

    // Eventlisteners til good og bad knapper - click

    // Baggrundsmusik spilles

    // Timer gaar i gang


}

function goodSelector() {
    console.log("goodSelector");

    // if sætning som tjekker om man har valgt rigtigt og den rigtige figur vises

    // mister liv hvis man vælger forkert

    // faar point hvis man vælger rigtigt

    // Billedet forsvinder - animation

    // if sætning om der er liv tilbage eller ikke
}

function badSelector() {
    console.log("badSelector");

    // if sætning som tjekker om man har valgt rigtigt og den rigtige figur vises

    // mister liv hvis man vælger forkert

    // faar point hvis man vælger rigtigt

    // Billedet forsvinder - animation, add class "hide"

    // if sætning om der er liv tilbage eller ikke
}

function respawn() {
    console.log("respawn");

    // Der vises et nyt random billede

    // hide classen fjernes

    // animation paa billede


}

function spilSlut() {
    console.log("spilSlut");

    // if sætning tjekker om man har point nok til at vinde, ellers taber man

    // slukker alle event listeners
}

function levelComplete() {
    console.log("levelComplete");

    // spilskærm hides

    // Level complete skærm vises

    // event listerner til spil igen
}

function gameOver() {
    console.log("gameOver");

    // spilskærm hides

    // Game over skærm vises

    // slukker alle event listeners

    // eventlistener til spil igen knap
}

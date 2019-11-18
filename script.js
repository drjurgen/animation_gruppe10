window.addEventListener("load", sidenLoades);

let points;
let liv;

function sidenLoades() {
    console.log("sidenLoades");

    // startskærm vises
    document.querySelector("#start").classList.remove("hide");

    // Eventlisteners til knapper
    document.querySelector("#startknap").addEventListener("click", infoScreen);

    // Timer er stop
    document.querySelector("#time_board_fill").classList.remove("timer");



}

function infoScreen() {
    console.log("infoScreen");

    // Infoskærm vises
    document.querySelector("#gameinfo").classList.remove("hide");

    // Startskærm hides
    document.querySelector("#start").classList.add("hide");


    // Eventlisterner til hele skærmen - click
    document.querySelector("#gameinfo").addEventListener("click", startGame);

    // timer nulstil
    document.querySelector("#time_board_fill").classList.remove("timer");



}


function startGame() {
    console.log("startGame");

    document.querySelector("#gameinfo").removeEventListener("click", startGame);


    // Infoskærm hides
    document.querySelector("#gameinfo").classList.add("hide");

    // Spilskærm vises
    document.querySelector("#game").classList.remove("hide");

    // Liv og point og timer nultilles
    liv = 3;
    points = 0;

    // Eventlisteners til good og bad knapper - click

    // Baggrundsmusik spilles

    // Timer gaar i gang
    document.querySelector("#time_board_fill").classList.add("timer");


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

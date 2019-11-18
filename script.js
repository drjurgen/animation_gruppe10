window.addEventListener("load", sidenLoades);

let points;
let liv;
let randomtal;


randomtal = Math.floor(Math.random() * 7) + 1;
console.log(randomtal);


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
    document.querySelector("#good_knap").addEventListener("click", goodSelector);
    document.querySelector("#bad_knap").addEventListener("click", badSelector);


    // Baggrundsmusik spilles

    // Timer gaar i gang
    document.querySelector("#time_board_fill").classList.add("timer");

    // et random billede vises
    document.querySelector("#billede" + randomtal).classList.remove("hide");

}

function goodSelector() {
    console.log("goodSelector");

    // if sætning som tjekker om man har valgt rigtigt og den rigtige figur vises
    if (document.querySelector("#billede" + randomtal).classList.contains("good")) {
        console.log("du fik point")

        // faar point hvis man vælger rigtigt
        points++;

        document.querySelector("#score_points").innerHTML = points;
    } else {
        console.log("du fik ikke points")

        document.querySelector("#hjerte" + liv).classList.add("grey");

        // mister liv hvis man vælger forkert
        liv--;
    }

    // Billedet forsvinder - animation

    this.classList.add("tryk");


    document.querySelector("#good_knap").removeEventListener("click", goodSelector);
    document.querySelector("#bad_knap").removeEventListener("click", badSelector);



    // if sætning om der er liv tilbage eller ikke

    if (liv >= 1) {
        this.addEventListener("animationend", respawn);

    } else {
        gameOver();
    }


}

function badSelector() {
    console.log("badSelector");

    // if sætning som tjekker om man har valgt rigtigt og den rigtige figur vises
    if (this.classList.contains("good")) {
        console.log("du fik ikke point")

        document.querySelector("#hjerte" + liv).classList.add("grey");

        // faar point hvis man vælger rigtigt
        liv--;

    } else {
        console.log("du fik points")


        // mister liv hvis man vælger forkert
        points++;

        document.querySelector("#score_points").innerHTML = points;

    }


    // mister liv hvis man vælger forkert

    // faar point hvis man vælger rigtigt

    // Billedet forsvinder - animation, add class "hide"

    // if sætning om der er liv tilbage eller ikke

    this.removeEventListener("click", badSelector);

}

function respawn() {
    console.log("respawn");

    document.querySelector("#billede" + randomtal).classList.add("hide");


    randomtal = Math.floor(Math.random() * 7) + 1;

    // Der vises et nyt random billede
    // hide classen fjernes
    document.querySelector("#billede" + randomtal).classList.remove("hide");

    document.querySelector("#good_knap").classList.remove("tryk");
    document.querySelector("#bad_knap").classList.remove("tryk");

    // animation paa billede
    document.querySelector("#good_knap").addEventListener("click", goodSelector);
    document.querySelector("#bad_knap").addEventListener("click", badSelector);


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

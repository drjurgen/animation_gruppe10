window.addEventListener("load", sidenLoades);

let points;
let liv;
let randomtal;


randomtal = Math.floor(Math.random() * 20) + 1;
console.log(randomtal);


function sidenLoades() {
    console.log("sidenLoades");

    // hider andre skærme
    document.querySelector("#gameinfo").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

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


    // Infoskærm hides og andre skærme
    document.querySelector("#gameinfo").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");


    // Spilskærm vises
    document.querySelector("#game").classList.remove("hide");

    // Liv og point og timer nultilles
    document.querySelector("#hjerte1").classList.remove("grey");
    document.querySelector("#hjerte2").classList.remove("grey");
    document.querySelector("#hjerte3").classList.remove("grey");

    document.querySelector("#figurerhappy").classList.add("hide");
    document.querySelector("#figurersad").classList.add("hide");
    document.querySelector("#figurerneutral").classList.remove("hide");

    document.querySelector("#sadsmiley").classList.add("hide");
    document.querySelector("#happysmiley").classList.add("hide");


    liv = 3;
    points = 0;
    console.log(liv);

    document.querySelector("#score_points").innerHTML = points;


    // Eventlisteners til good og bad knapper - click
    document.querySelector("#good_knap").addEventListener("click", goodSelector);
    document.querySelector("#bad_knap").addEventListener("click", badSelector);

    document.querySelector("#good_knap").classList.remove("tryk");
    document.querySelector("#bad_knap").classList.remove("tryk");


    // Baggrundsmusik spilles

    // Timer gaar i gang
    document.querySelector("#time_board_fill").classList.add("timer");

    // event listener til timer
    document.querySelector("#time_board_fill").addEventListener("animationend", spilSlut);

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

        document.querySelector("#correct").play();

        document.querySelector("#score_points").innerHTML = points;

        document.querySelector("#figurerhappy").classList.remove("hide");
        document.querySelector("#figurerneutral").classList.add("hide");

        document.querySelector("#happysmiley").classList.remove("hide");


    } else {
        console.log("du fik ikke points")

        document.querySelector("#hjerte" + liv).classList.add("grey");

        // mister liv hvis man vælger forkert
        liv--;

        document.querySelector("#wrong").play();
        document.querySelector("#figurersad").classList.remove("hide");
        document.querySelector("#figurerneutral").classList.add("hide");

        document.querySelector("#sadsmiley").classList.remove("hide");

        console.log(liv);

    }

    // Billedet forsvinder - animation



    if (liv >= 1) {
        this.addEventListener("animationend", respawn);

    } else {
        gameOver();

    }
    this.classList.add("tryk");


    document.querySelector("#good_knap").removeEventListener("click", goodSelector);
    document.querySelector("#bad_knap").removeEventListener("click", badSelector);

    // if sætning om der er liv tilbage eller ikke



}

function badSelector() {
    console.log("badSelector");

    // if sætning som tjekker om man har valgt rigtigt og den rigtige figur vises
    if (document.querySelector("#billede" + randomtal).classList.contains("good")) {
        console.log("du fik ikke point")

        document.querySelector("#hjerte" + liv).classList.add("grey");

        // faar point hvis man vælger rigtigt
        liv--;

        document.querySelector("#wrong").play();

        document.querySelector("#figurersad").classList.remove("hide");
        document.querySelector("#figurerneutral").classList.add("hide");

        document.querySelector("#sadsmiley").classList.remove("hide");

        console.log(liv);



    } else {
        console.log("du fik points")


        // mister liv hvis man vælger forkert
        points++;

        document.querySelector("#correct").play();

        document.querySelector("#score_points").innerHTML = points;

        document.querySelector("#figurerhappy").classList.remove("hide");
        document.querySelector("#figurerneutral").classList.add("hide");

        document.querySelector("#happysmiley").classList.remove("hide");


    }

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

function respawn() {
    console.log("respawn");

    document.querySelector("#billede" + randomtal).classList.add("hide");


    randomtal = Math.floor(Math.random() * 20) + 1;
    console.log(randomtal);

    // Der vises et nyt random billede
    // hide classen fjernes
    document.querySelector("#billede" + randomtal).classList.remove("hide");

    document.querySelector("#good_knap").classList.remove("tryk");
    document.querySelector("#bad_knap").classList.remove("tryk");

    // fjerne event listeners


    document.querySelector("#good_knap").addEventListener("click", goodSelector);
    document.querySelector("#bad_knap").addEventListener("click", badSelector);

    document.querySelector("#figurerhappy").classList.add("hide");
    document.querySelector("#figurersad").classList.add("hide");
    document.querySelector("#figurerneutral").classList.remove("hide");

    document.querySelector("#sadsmiley").classList.add("hide");
    document.querySelector("#happysmiley").classList.add("hide");


}

function spilSlut() {
    console.log("spilSlut");

    // if sætning tjekker om man har point nok til at vinde, ellers taber man
    if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }

    // slukker alle event listeners

}

function levelComplete() {
    console.log("levelComplete");

    // spilskærm hides
    document.querySelector("#game").classList.add("hide");

    // Level complete skærm vises
    document.querySelector("#levelcomplete").classList.remove("hide");

    // event listerner til spil igen og main menu knap
    document.querySelector("#spiligenknap_lc").addEventListener("click", startGame);

    document.querySelector("#mainmenuknap_lc").addEventListener("click", sidenLoades);

    document.querySelector("#good_knap").classList.remove("tryk");
    document.querySelector("#bad_knap").classList.remove("tryk");

}

function gameOver() {
    console.log("gameOver");

    // spilskærm hides
    document.querySelector("#game").classList.add("hide");

    // Game over skærm vises
    document.querySelector("#gameover").classList.remove("hide");


    // slukker alle event listeners


    // eventlistener til spil igen knap og main menu knap
    document.querySelector("#spiligenknap_go").addEventListener("click", startGame);

    document.querySelector("#mainmenuknap_go").addEventListener("click", sidenLoades);

    document.querySelector("#good_knap").classList.remove("tryk");
    document.querySelector("#bad_knap").classList.remove("tryk");

}

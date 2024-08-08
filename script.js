document.querySelector("h1").onclick = try1;

var random;
var random2;

function try1() {
    random = Math.floor(Math.random() * 6 + 1);
    random2 = Math.floor(Math.random() * 6 + 1);

    if (random === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }

    if (random === 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }

    if (random === 3){
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }

    if (random === 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }

    if (random === 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }

    if (random === 6){
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    //2nd Dice


    if (random2 === 1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }

    if (random2 === 2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }

    if (random2 === 3){
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }

    if (random2 === 4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }

    if (random2 === 5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }

    if (random2 === 6){
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}
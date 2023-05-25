document.getElementById('click').addEventListener('click', function () {
    console.log("button has been clicked");
    game();
})

//main logic
function game() {
    let inp = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * 3);
    let compchoice = inp[x];
    compImg(x);
    // console.log(compchoice);

    let y = Math.floor(Math.random() * 3);
    let playerchoice = inp[y];
    playerImg(y);

    if (playerchoice == compchoice) {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("its a tie");
        document.getElementById('won').innerText = "It's a tie!";
    }
    //paper
    else if (playerchoice == "paper" && compchoice == "scissor") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('won').innerText = 'Computer won';
    }
    else if (playerchoice == "paper" && compchoice == "rock") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('won').innerText = 'Player won';
    }
    //rock
    else if (playerchoice == "rock" && compchoice == "scissor") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('won').innerText = 'Player won';
    }
    else if (playerchoice == "rock" && compchoice == "paper") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('won').innerText = 'Computer won';
    }
    //scissor
    else if (playerchoice == "scissor" && compchoice == "paper") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('won').innerText = 'Computer won';
    }
    else if (playerchoice == "scissor" && compchoice == "rock") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('won').innerText = 'Player won';
    }

}

//img output computer
function compImg(x) {
    if (x == 0) {
        document.getElementById('computer').innerHTML = '<img src="img/rock.png" alt="">';
    }
    else if (x == 1) {
        document.getElementById('computer').innerHTML = '<img src="img/paper.png" alt="">';
    }
    else if (x == 2) {
        document.getElementById('computer').innerHTML = '<img src="img/scissor.png" alt="">';
    }
}
//img output player
function playerImg(x) {
    if (x == 0) {
        document.getElementById('player').innerHTML = '<img src="img/rock.png" alt="">';
    }
    else if (x == 1) {
        document.getElementById('player').innerHTML = '<img src="img/paper.png" alt="">';
    }
    else if (x == 2) {
        document.getElementById('player').innerHTML = '<img src="img/scissor.png" alt="">';
    }
}
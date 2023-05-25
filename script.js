document.getElementById('click').addEventListener('click', function () {
    console.log("button has been clicked");
    game();
    
})
    var scoreP=0;
    var scoreC=0;
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
        document.getElementById('status').innerText = "It's a tie!";
        
    }
    //paper
    else if (playerchoice == "paper" && compchoice == "scissor") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('status').innerText = 'Computer won';

        scoreC++;
        document.getElementById('score-computer').innerText= scoreC;
    }
    else if (playerchoice == "paper" && compchoice == "rock") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('status').innerText = 'Player won';

        scoreP++
        document.getElementById('score-player').innerText = scoreP;
    }
    //rock
    else if (playerchoice == "rock" && compchoice == "scissor") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('status').innerText = 'Player won';

        scoreP++
        document.getElementById('score-player').innerText = scoreP;
    }
    else if (playerchoice == "rock" && compchoice == "paper") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('status').innerText = 'Computer won';

        scoreC++;
        document.getElementById('score-computer').innerText= scoreC;
    }
    //scissor
    else if (playerchoice == "scissor" && compchoice == "paper") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("computer wins");
        document.getElementById('status').innerText = 'Computer won';

        scoreC++;
        document.getElementById('score-computer').innerText= scoreC;
    }
    else if (playerchoice == "scissor" && compchoice == "rock") {
        console.log("computer got " + compchoice + " and player got " + playerchoice);
        console.log("player wins");
        document.getElementById('status').innerText = 'Player won';

        scoreP++
        document.getElementById('score-player').innerText = scoreP;
    }

}

//img output computer
function compImg(x) {
    if (x == 0) {
        document.getElementById('computer-image-container').innerHTML = '<img class="image" src="img/rock.png" alt="">';
    }
    else if (x == 1) {
        document.getElementById('computer-image-container').innerHTML = '<img class="image" src="img/paper.png" alt="">';
    }
    else if (x == 2) {
        document.getElementById('computer-image-container').innerHTML = '<img class="image" src="img/scissor.png" alt="">';
    }
}
//img output player
function playerImg(x){
    if (x == 0) {
        document.getElementById('player-image-container').innerHTML = '<img class="image" src="img/rock.png" alt="">';
    }
    else if (x == 1) {
        document.getElementById('player-image-container').innerHTML = '<img class="image" src="img/paper.png" alt="">';
    }
    else if (x == 2) {
        document.getElementById('player-image-container').innerHTML = '<img class="image" src="img/scissor.png" alt="">';
    }
}
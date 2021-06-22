let currentPlayer = "Player 1 ";
const roll = document.getElementById("rollBtn");
const hold = document.getElementById("holdBtn");
const p1Total = document.getElementById("total-1");
const p2Total = document.getElementById("total-2");
const p1Score = document.getElementById("current-1");
const p2Score = document.getElementById("current-2");
let totalScore1 = 0; 
let totalScore2 = 0;


// roll button
roll.addEventListener("click", () => {

    // generate random numbers 1-6
    let rollDice = Math.floor(Math.random() * 6) +1;


     if (currentPlayer == "Player 1 ") {
// update player 1 current and total scores
    p1Score.innerHTML = rollDice
    totalScore1 += rollDice
    p1Total.innerHTML = totalScore1
     //  display corresponding dice img
    let dice = document.getElementById("diceImg")
    dice.innerHTML = "<img src='images/"+rollDice+".png'/>"

     } else {
//  update player 2 current and total scores
      p2Score.innerHTML = rollDice
      totalScore2 += rollDice
      p2Total.innerHTML = totalScore2
//  display corresponding dice img
      let dice = document.getElementById("diceImg2")
      dice.innerHTML = "<img src='images/"+rollDice+".png'/>"
     
     currentPlayer = "Player 2 "
}

// roll 1 and lose
if(rollDice == 1) {

    document.getElementById("message").innerHTML = currentPlayer + "Lost! New game to start again!"
    


} else {

    document.getElementById("message").innerHTML = currentPlayer + "Roll or Hold"
}

// check winner
if(totalScore >= 20) {

    document.getElementById("message").innerHTML = currentPlayer +"Won! New Game to start again"

} else {

    document.getElementById("message").innerHTML = "Roll or Hold"
}

});

// hold button
hold.addEventListener("click", () => {

    if (currentPlayer == "Player 1") {

        currentPlayer = "Player 2"

    } else  {

        currentPlayer = "Player 1"
    }

});

// change players names
const editNames = document.getElementById("editNamesBtn").addEventListener("click", () =>{
    let player1 = document.getElementById("name-1");
    let player2 = document.getElementById("name-2");
    player1.innerHTML = prompt("Player 1 Name", "<name goes here>");
    player2.innerHTML = prompt("Player 2 Name", "<name goes here>");
});

// start new game
const newGame = document.getElementById("newGameBtn").addEventListener("click",()  => {
    location.reload();
});



















































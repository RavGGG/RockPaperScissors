
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)

    let choice;
    if (randomNumber === 1) {
        choice = "Rock"
    } else if (randomNumber === 2) {
        choice = "Paper"
    } else if (randomNumber === 3) {
        choice = "Scissors"
    } else {
        alert("ALARM")
    }
    return choice;

}




function game(  ){

    let playerScore = 0;
let computerScore = 0;
let rounds = 0;

    for (let i = 0; i < 5; i++){
        let playerSelect = prompt("Select: rock, paper or scissors");
        let computerSelect = getComputerChoice();
        
        playerSelect = playerSelect.toLowerCase();
        computerSelect = computerSelect.toLowerCase();

        if (playerSelect === "") {
            return "you have to select a weapon, to restar click F5"
        }
        
        console.log("player: " + playerSelect + "  VS  " + "computer: " + computerSelect);
    
        function playRound(playerSelect, computerSelect) {
            if (playerSelect == computerSelect) {
                rounds++;
                return "Tie"
                
            } else if (playerSelect === "rock" && computerSelect === "scissors") {
                playerScore++
                rounds++;
                return "player win, rock beat scissors"
            } else if (playerSelect === "paper" && computerSelect === "rock") {
                playerScore++
                rounds++;
                return "player win, paper beat rock"
            } else if (playerSelect === "scissors" && computerSelect === "paper") {
                playerScore++
                rounds++;
                return "player win, scissors beat paper"
            } else if (computerSelect === "rock" && playerSelect === "scissors") {
                computerScore++
                rounds++;
                return "computer win, rock beat scissors"
            } else if (computerSelect === "paper" && playerSelect === "rock") {
                computerScore++
                rounds++;
                return "computer win, paper beat rock"
            } else if (computerSelect === "scissors" && playerSelect === "paper") {
                computerScore++
                rounds++;
                return "computer win, scissors beat paper"
            } else {
                return "something wrong"
            }
        
        
        }

console.log("Battle:     " + playRound(playerSelect, computerSelect))
console.log("PLAYER:  " + playerScore + "  COMPUTER   : " + computerScore + " ROUND   : " + rounds)
console.log(" ")
console.log(" ")
}

if (playerScore > computerScore){
    console.log ("FINAL RESULT : Player win")
} else if (playerScore < computerScore){
    console.log ("FINAL RESULT : Computer win")
} else {
    console.log("FINAL RESULT :TIEEEEEEEEEEEEEE")
}
}

console.log(game())


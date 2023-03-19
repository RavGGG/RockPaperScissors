const wrapper = document.querySelector('.wrapper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');

const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const finishScore = document.querySelector('.result-text')

const battle = document.createElement('p');
battle.classList.add('battle');
wrapper.appendChild(battle)

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];


}


let playerScore = 0;
let computerScore = 0;
let maxScore = 5;  


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        battle.textContent = "Tie"
        return 'Tie!';

    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        battle.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
        return `You win! ${playerSelection} beats ${computerSelection}.`;

    } else {
        computerScore++;
        battle.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`;



    }
}

    function endgame(){
        rock.removeEventListener('click', rockSelect )
        paper.removeEventListener('click',paperSelect)
        scissors.removeEventListener('click',scissorsSelect)

        if (playerScore>computerScore){
            return finishScore.textContent = "Player WIN !"
           
        } else {
            return finishScore.textContent = "Computer WIN !"
        }

    }

    function scissorsSelect() {
        const computerSelection = getComputerChoice();
        const result = playRound('scissors', computerSelection);
        console.log(result);
        userScore.textContent = `player score: ${playerScore}`
        compScore.textContent = `computer score: ${computerScore}`;
        if (playerScore === maxScore || computerScore === maxScore) {
            endgame();
        }
    }

    function rockSelect () {
        const computerSelection = getComputerChoice();
        const result = playRound('rock', computerSelection);
        console.log(result);

        userScore.textContent = `player score: ${playerScore}`
        compScore.textContent = `computer score: ${computerScore}`;
        if (playerScore === maxScore || computerScore === maxScore) {
            endgame();
        }
    }

    function paperSelect () {
        const computerSelection = getComputerChoice();
        const result = playRound('paper', computerSelection);
        console.log(result);
        userScore.textContent = `player score: ${playerScore}`
        compScore.textContent = `computer score: ${computerScore}`;
        if (playerScore === maxScore || computerScore === maxScore) {
            endgame();
        }
    }




    rock.addEventListener('click', rockSelect);

    paper.addEventListener('click', paperSelect);

    scissors.addEventListener('click', scissorsSelect);
    


    
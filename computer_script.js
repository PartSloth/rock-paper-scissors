function getComputerChoice() {
    const hands = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * hands.length);
    return hands[random];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'scissor') {
        return 1;
    } else if (playerSelection === 'Scissor' && computerSelection === 'paper') {
        return 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'rock') {
        return 1;
    } else {
        return 0;
    }
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {

        let playerSelection = prompt("GAME " + i + ". Enter rock, paper, or scissor.", "Rock").toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            console.log("You win! " + playerSelection + " beats " + computerSelection + ".");

            playerScore++;
        } else {
            console.log("You lose! " + playerSelection + " loses to " + computerSelection + ".");
            computerScore++;
        }

    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose! Try again!");
    }
};

game();
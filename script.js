function getComputerChoice() {
    let num = Math.random();
    let str;
    if (num > 2/3) {
        str = "rock";
    }
    else if (num < 1/3) {
        str = "paper";
    }
    else {
        str = "scissors";
    }
    return str;
}

const valid = ["rock", "paper", "scissors"];

function getHumanChoice() {
    let input = window.prompt("rock, paper, scissors");
    let choice = input.toLowerCase();
    if (valid.includes(choice) === false) {
        getHumanChoice();
    }
    return choice;
}

let humanChoice;
let computerChoice;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a draw!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a draw!");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
    else {
        console.log("It's a draw!");
    }
}



function playGame() {
    humanScore = 0;
    computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a draw");
    }
}

playGame();

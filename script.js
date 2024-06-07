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


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let humanChoice;
let computerChoice;

rock.addEventListener("click", e => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", e => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", e => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector(".results");
const msg = document.createElement("p");
const counter = document.createElement("p");
const end = document.createElement("p");

counter.style = "text-align: center;"
msg.style = "text-align: center;"
results.style = "text-align: center;"

function playRound(humanChoice, computerChoice) {
    end.remove();
    if (humanChoice === "rock" && computerChoice === "rock") {
        msg.textContent = "It's a draw!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        msg.textContent = "You lose! Paper beats rock";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        msg.textContent = "You win! Rock beats scissors";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        msg.textContent = "You win! Paper beats rock";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        msg.textContent = "It's a draw!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        msg.textContent = "You lose! Scissors beats paper";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        msg.textContent = "You lose! Rock beats scissors";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        msg.textContent = "You win! Scissors beats paper";
        humanScore++;
    }
    else {
        msg.textContent = "It's a draw!";
    }
    results.appendChild(msg);
    counter.textContent = humanScore + " - " + computerScore;
    results.appendChild(counter);
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            end.textContent = "The game has ended. You win! Choose again to restart."
        }
        else {
            end.textContent = "The game has ended. You lose! Choose again to restart."
        }
        results.appendChild(end);
        humanScore = 0;
        computerScore = 0;
    }
}


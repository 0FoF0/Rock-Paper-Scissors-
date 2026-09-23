
function getComputerChoice(number) {
    let random_number = Math.random();
    random_number = Math.floor(random_number * 3)
    // random_number = (random_number * 10) - random_number
    // 0 - 8 only 9 number is dividable by 3

    if (random_number == 0) {
        return "rock"
    }

    if (random_number == 1) {
        return "paper"
    }

    if (random_number == 2) {
        return "scissor"
    }
}

function getHumanChoice() {

    let log = null;

    log = prompt("Enter rock or paper or scissor");

    log = log.toLowerCase();


    if (log == "rock") {
        return "rock"
    }
    if (log == "paper") {
        return "paper"
    }
    if (log == "scissor") {
        return "scissor"
    }
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        console.log("Human: "+humanChoice);
        console.log("Computer: "+computerChoice);

        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats  ${computerChoice}.`);
            humanScore += 1
        }
        if (humanChoice == "paper" && computerChoice == "scissor") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;

        }
        if (humanChoice == "scissor" && computerChoice == "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1
        }
        if (humanChoice == "scissor" && computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
        }
        if (humanChoice == "rock" && computerChoice == "scissor") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1
        }
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

}

playGame();


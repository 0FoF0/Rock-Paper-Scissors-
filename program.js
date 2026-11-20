const scissoreffect = new Audio('scissor.wav')
const papereffect = new Audio('paper.wav')
const rockeffect = new Audio('rock.wav')

papereffect.playbackRate = 2;   // 2x speed
rockeffect.playbackRate=2;
function getComputerChoice() {
    let random_number = Math.random();
    random_number = Math.floor(random_number * 3)
    // random_number = (random_number * 10) - random_number
    // 0 - 8 only 9 number is dividable by 3

    if (random_number == 1) {
        return 1
    }

    if (random_number == 2) {
        return 2
    }

    if (random_number == 0) {
        return 0
    }
}

const humanScore = document.getElementById("Hscore");
const computerScore = document.getElementById("Cscore");
const StoreImages = document.querySelectorAll('.CCards>div')


let HN = Number(humanScore.textContent);
let CN = Number(computerScore.textContent);

const humanChoice = document.querySelectorAll("button");


let computerChoice = null;

function playRound(event) {


    computerChoice = getComputerChoice();
    console.log(event.currentTarget.id)
    if (event.currentTarget.id == "Rock" && computerChoice == 2) {
        papereffect.play();
        CN += 1;
    }
    if (event.currentTarget.id == "Paper" && computerChoice == 1) {
        papereffect.play();
        HN += 1
    }
    if (event.currentTarget.id == "Paper" && computerChoice == 0) {
        scissoreffect.play();
        CN += 1;

    }
    if (event.currentTarget.id == "Scissor" && computerChoice == 2) {
        scissoreffect.play();
        HN += 1
    }
    if (event.currentTarget.id == "Scissor" && computerChoice == 1) {
        rockeffect.play();
        CN += 1;
    }
    if (event.currentTarget.id == "Rock" && computerChoice == 0) {
        rockeffect.play();
        HN += 1
    }

    StoreImages[computerChoice].classList.add('active')

    humanScore.textContent = HN;
    computerScore.textContent = CN;

    setTimeout(() => {
        StoreImages[computerChoice].classList.remove('active')
    }, 800);

}


humanChoice.forEach((button) => {
    button.addEventListener('click', playRound)
    console.log(button)
})

// for (let i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//


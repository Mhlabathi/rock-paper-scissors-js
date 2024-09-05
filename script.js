console.log("Let's Play ROCK PAPER SCISSORS!..");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.floor( Math.random() * 3 ) + 1;
    let compChoice = '';
    switch(choice){
        case 1: compChoice = "ROCK";
        break;
        case 2: compChoice = "PAPER";
        break;
        default: compChoice = "SCISSORS";
    }

    return compChoice;
}

function getHumanChoice(){
    const choice = prompt("Choose Rock, Paper or Scissors:");
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("You lose, PAPER beats ROCK");
        computerScore++;
    }
    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You win, ROCK beats SCISSORS");
        humanScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        console.log("You lose, SCISSORS beats PAPER");
        computerScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("You win, PAPER beats ROCK");
        humanScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        console.log("You lose, ROCK beats SCISSORS");
        computerScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("You win, SCISSORS beats PAPER");
        computerScore++;
    }
    else{
        console.log(`Draw, computer chose ${computerChoice} and you also chose ${humanChoice} `);
        computerScore++;
        humanScore++;
    }
}

function playGame(){
    let playTimes = 0;

    while(playTimes<5){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Copmuter Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        playTimes++;
    }

    if(computerScore > humanScore){
        console.log(`Computer wins game by ${computerScore} - ${humanScore}`);
    }
    else if(computerScore < humanScore){
        console.log(`You win the game by ${humanScore} - ${computerScore}`);
    }
    else{
        console.log(`Game drawn by ${humanScore} - ${computerScore}`);
    }

}

playGame();
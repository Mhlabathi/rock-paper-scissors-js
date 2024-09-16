console.log("Let's Play ROCK PAPER SCISSORS!..");

let humanScore = 0;
let computerScore = 0;

const rock = document.createElement("button");
rock.textContent = "ROCK";
const paper = document.createElement('button');
paper.textContent = 'PAPER';
const scissors = document.createElement('button');
scissors.textContent = 'SCISSORS';

const para = document.createElement('p');
para.textContent = '';
const results = document.createElement('p');

const div = document.querySelector('.player-buttons');
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
div.appendChild(para);
div.appendChild(results);

const roundResult = document.createElement('p');
div.appendChild(roundResult);

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


function playRound(humanChoice, computerChoice){

    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        roundResult.textContent = "You lose, PAPER beats ROCK";
        computerScore++;
    }
    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        roundResult.textContent = "You win, ROCK beats SCISSORS";
        humanScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        roundResult.textContent = "You lose, SCISSORS beats PAPER";
        computerScore++;
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        roundResult.textContent = "You win, PAPER beats ROCK";
        humanScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        roundResult.textContent = "You lose, ROCK beats SCISSORS";
        computerScore++;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        roundResult.textContent = "You win, SCISSORS beats PAPER";
        computerScore++;
    }
    else{
        roundResult.textContent = `Draw, computer chose ${computerChoice} and you also chose ${humanChoice} `;
        computerScore++;
        humanScore++;
    }
}

function checkScore(){
    if(computerScore >= 5 || humanScore >= 5){
        return true;
    }
    return false;
}

function showResults(){

    if(computerScore > humanScore){
        results.textContent = `Computer wins game by ${computerScore} - ${humanScore}`;
    }
    else if(computerScore < humanScore){
        results.textContent = `You win the game by ${humanScore} - ${computerScore}`;
    }
    else{
        results.textContent = `Game drawn by ${humanScore} - ${computerScore}`;
    }
}

rock.addEventListener('click', function(){
    if(checkScore()){
        showResults();
        window.stop();
    }
    else{
        playRound("ROCK", getComputerChoice());
        para.textContent = `Computer Score - ${computerScore} \n Human SCore - ${humanScore}`;
    }
});

paper.addEventListener('click', function(){
    if(checkScore()){
        showResults();
        window.stop();
    }
    else{
        playRound("PAPER", getComputerChoice());
        para.textContent = `Computer Score - ${computerScore} \n Human SCore - ${humanScore}`;
    }
});

scissors.addEventListener('click', function(){
    if(checkScore){
        showResults();
        window.stop();
    }
    else{
        playRound("SCISSORS", getComputerChoice());
        para.textContent = `Computer Score - ${computerScore} \n Human SCore - ${humanScore}`;
    }
});
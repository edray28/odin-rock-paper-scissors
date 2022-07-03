const result = document.querySelector('.results');
const headerResults = document.createElement('h2');
const scoreDisplay = document.querySelector('h3');

let playerSelection;
let roundCPU;
let score = 0;

function game() {
    function playerPlay() {
        document.querySelector("#btn1").addEventListener('click', () => playerSelection = 'rock')
        document.querySelector("#btn2").addEventListener('click', () => playerSelection = 'paper')
        document.querySelector("#btn3").addEventListener('click', () => playerSelection = 'scissors')
    }

    function computerPlay() {
        const choices = ['rock', 'paper', 'scissors'];
        const selectChoice = Math.floor(Math.random() * 3);
        roundCPU = (choices[selectChoice]);
    }

    function playRound(roundCPU, playerSelection) {
        if (playerSelection == 'rock' && roundCPU == 'scissors') {
            score += 1;
            headerResults.textContent = `You Win this Round!`

            scoreDisplay.textContent = `Score: ${score}`
            result.append(headerResults);
        } else if (playerSelection == 'paper' && roundCPU == 'rock') {
            score += 1;
            headerResults.textContent = `You Win this Round!`
            scoreDisplay.textContent = `Score: ${score}`
            result.append(headerResults);
        } else if (playerSelection == 'scissors' && roundCPU == 'paper') {
            score += 1;
            headerResults.textContent = `You Win this Round!`
            scoreDisplay.textContent = `Score: ${score}`
            result.append(headerResults);
        } else if (playerSelection == roundCPU) {
            headerResults.textContent = 'The Round is a Tie!';
            scoreDisplay.textContent = `Score: ${score}`
            result.append(headerResults);
        } else {
            headerResults.textContent = `You lose this Round!`;
            scoreDisplay.textContent = `Score: ${score}`
            result.append(headerResults);
        }

    }
    function checkScore() {
        if (score == 5) {
            alert("Game Over!")
            headerResults.textContent = ""
            score = 0;
        }
    }
    playerPlay();
    computerPlay();
    playRound(roundCPU, playerSelection);
    checkScore();
}
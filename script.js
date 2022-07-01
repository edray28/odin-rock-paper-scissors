function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win PLAYER:${playerSelection} beats CPU:${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win PLAYER:${playerSelection} beats CPU:${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win PLAYER:${playerSelection} beats CPU:${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return 'DRAW'
    } else if (playerSelection === computerSelection) {
        return 'DRAW'
    }
    else {
        return `You Lose CPU:${computerSelection} beats PLAYER: ${playerSelection}`
    }
}
function computerPlay() {
    const choices = Math.floor(Math.random(3) * 3) + 1
    if (choices == 1) {
        return 'Rock'.toLowerCase()
    } else if (choices == 2) {
        return 'Paper'.toLowerCase()
    } else if (choices == 3) {
        return 'Scissors'.toLowerCase()
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Your Choice: Rock, Paper, Scissors`).toLowerCase()
        if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            console.log("SELECT A CHOICE");
            i--;
            continue;
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game();

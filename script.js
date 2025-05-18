let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}
updateScoreElement();
function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Draw';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Draw';
        } else {
            result = 'You lose';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Draw';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else {
        alert('Invalid move');
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if  (result ==='You lose') {
        score.losses += 1;
    } else if (result ==='Draw') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `        You <img class="move-icon" src="./${playerMove}-emoji.png">
<img class="move-icon" src="./${computerMove}-emoji.png">
Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
}


function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {

        computerMove = 'rock';

    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {

        computerMove = 'paper';

    } else {

        computerMove = 'scissors';

    }
    
    console.log(computerMove);

    return computerMove;
}

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function round(computerSelection) {
    let playerSelection = prompt("Choose your element: ").toLowerCase();
    let score = playerSelection+computerSelection;
    console.log(score);

    if (score == 'rockrock' || score == 'paperpaper' || score == 'scissorsscissors') {
        console.log('Draw! You both choose: ' + playerSelection);
        return 0;
    } else if (score == 'rockscissors' || score == 'paperrock' || score == 'scissorspaper') {
        console.log('You won! '+playerSelection + ' beats '+ computerSelection);
        return 1;
    } else if (score == 'rockpaper' || score == 'paperscissors' || score == 'scissorsrock'){
        console.log('You lost! '+ computerSelection + ' beats '+ playerSelection);
        return 2;
    } else {
        console.log('You entered wrong element!');
        return 3;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i = 0; i < 5; i++) {
            result = parseInt(round(getComputerChoice()));
            switch (result) {
                case 0:
                    playerScore += 1;
                    computerScore += 1;
                    break;
                case 1:
                    playerScore += 1;
                    break;
                case 2:
                    computerScore += 1;
                    break;
                case 3:
                    i = i-1;
                    break;
                default:
                    break;
            }
        }
    if (playerScore > computerScore) {
        console.log("You have won the game! The score: " + playerScore + ":" + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You have lost the game! The score: " + playerScore + ":" + computerScore);
    } else {
        console.log("The game is tied! The score: " + playerScore + ":" + computerScore);
    }
}

game();

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function round(playerSelection, computerSelection) {
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


let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
                let computerChoice = getComputerChoice();
                switch (round(button.id, computerChoice)) {
                    case 0:
                        playerScore += 0;
                        computerScore += 0;
                        break;
                    case 1:
                        playerScore += 1;
                        break;
                    case 2:
                        computerScore += 1;
                        break;
                    default:
                        break;
                }
                document.querySelector('.score-round').textContent = button.id + " vs " + computerChoice;
                
                if (playerScore == 5) {
                    document.querySelector('.show-score-p').textContent = 'You won!';
                    playerScore = 0;
                    computerScore = 0;
                } else if(computerScore == 5) {
                    document.querySelector('.show-score-p').textContent = 'You lost!';
                        playerScore = 0;
                        computerScore = 0;
                } else {
                    document.querySelector('.show-score-p').textContent = playerScore + ":" + computerScore;
                }
            })
});



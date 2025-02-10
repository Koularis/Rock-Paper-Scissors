function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

export default function gameRound(playerSelection){
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    switch(computerSelection){
        case 'rock':
            if(playerSelection === 'paper'){
                return 'You Win! Paper beats Rock';
            }
            else if(playerSelection === 'scissors'){
                return 'You Lose! Rock beats Scissors';
            }
            else{
                return 'Draw';
            }
        case 'paper':
            if(playerSelection === 'scissors'){
                return 'You Win! Scissors beats Paper';
            }
            else if(playerSelection === 'rock'){
                return 'You Lose! Paper beats Rock';
            }
            else{
                return 'Draw';
            }
        case 'scissors':
            if(playerSelection === 'rock'){
                return 'You Win! Rock beats Scissors';
            }
            else if(playerSelection === 'paper'){
                return 'You Lose! Scissors beats Paper';
            }
    }
}
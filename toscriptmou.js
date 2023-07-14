function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1
    switch(randomNumber){
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

function rpsChoice(playerChoice,computerChoice){ 
    let player = playerChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();
    console.log("Computer chose " + computer)
    switch(player){
        case "ROCK":
            switch(computer){
                case 'ROCK':
                    return "Tie!"
                case 'PAPER':
                    return "You lost! Paper beats Rock."
                case 'SCISSORS':
                    return "You won! Rock beats Scissors"
            }
        case "PAPER":
            switch(computer){
                case 'ROCK':
                    return "You won! Paper beats Rock"
                case 'PAPER':
                    return "Tie!"
                case 'SCISSORS':
                    return "You lost! Scissors beat Paper"
            } 
        case "SCISSORS":
                        console.log("Went in")
            switch(computer){
                case 'ROCK':
                    return "You lost! Rock beats Scissors"
                case 'PAPER':
                    return "You won! Scissors beat Paper"
                case 'SCISSORS':
                    return "Tie!"
            } 
    }


}

function rpsRound(){
        let playerChoice = prompt("Please enter your choice!")
        let result = rpsChoice(playerChoice,getComputerChoice());
        return result;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0;i < 5;i++){
        result = rpsRound();
        if(result.includes("won")){
            playerScore += 1;
        }
        else if(result.includes("lost")){
            computerScore += 1;
        }
        alert(result + " Score is: " + playerScore + " - " +computerScore);
    }
    alert("Final score is " + playerScore + " - " + computerScore);
}
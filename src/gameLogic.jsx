import { useState } from 'react';
import rock from './assets/icons8-rock-100.png';
import paper from './assets/icons8-paper-100.png';
import scissors from './assets/icons8-scissors-100.png';

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function Scorebox({score}){
    const[playerScore, computerScore] = score
    return(
      <div className='score'>
        <p>{playerScore} - {computerScore}</p>
      </div>
    )
  }

function Playagain({setFinished, setScore,winner}){
    return(
        <div className='playState'>
            <h1>{winner} wins!</h1>
            <input className='stateButtons' id='play' type='button' value={'Play again'} onClick={() => setScore([0, 0])}></input><br/>
            <input className='stateButtons' id='stop' type='button' value='Stop playing' onClick={() => setFinished(true)}></input>
        </div>

    )
}


export default function GameBox({setFinished}) {
    const [score, setScore] = useState([0, 0]);

    function gameRound(playerSelection){
        const[playerScore, computerScore] = score
        const computerSelection = getComputerChoice();
        switch(computerSelection){
            case 'rock':
                if(playerSelection === 'paper'){
                    setScore([playerScore + 1, computerScore])
                    alert(`You win! Computer picked ${computerSelection}`);
                }
                else if(playerSelection === 'scissors'){
                    setScore([playerScore, computerScore + 1])
                    alert(`You lose! Computer picked ${computerSelection}`);
                }
                else{
                    alert('Draw');
                }
                break;
            case 'paper':
                if(playerSelection === 'scissors'){
                    setScore([playerScore + 1, computerScore])
                    alert(`You win! Computer picked ${computerSelection}`);
                }
                else if(playerSelection === 'rock'){
                    setScore([playerScore, computerScore + 1])
                    alert(`You lose! Computer picked ${computerSelection}`);
                }
                else{
                    alert('Draw');
                }
                break;
            case 'scissors':
                if(playerSelection === 'rock'){
                    setScore([playerScore + 1, computerScore])
                    alert(`You win! Computer picked ${computerSelection}`);
                }
                else if(playerSelection === 'paper'){
                    setScore([playerScore, computerScore + 1])
                    alert(`You lose! Computer picked ${computerSelection}`);
                }
                else{
                    alert('Draw');
                }
                break;
        }
    }

    if(score[0] === 3 || score[1] === 3){
        let winner = (score[0] > score[1]) ? 'Player' : 'Computer';
        return <Playagain winner={winner} setScore={setScore} setFinished={setFinished}/>
    }
    else {
        return(
            <>
                <div className='gameContainer'>
                <img src={rock} alt='rock' id='rock' onClick={() => gameRound('rock')}></img>
                <img src={paper} alt='paper' id='paper' onClick={() => gameRound('paper')}></img>
                <img src={scissors} alt='scissors' id='scissors' onClick={() => gameRound('scissors')}></img>
                </div>
                < Scorebox score={score}/>
            </>
        );
    }
}

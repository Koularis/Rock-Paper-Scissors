import { useState } from 'react'
import rock from './assets/icons8-rock-100.png';
import paper from './assets/icons8-paper-100.png';
import scissors from './assets/icons8-scissors-100.png';
import './App.css'

function GameBox() {
  return (
    <div className='gameContainer'>
      <img src={rock} alt='rock' id='rock'></img>
      <img src={paper} alt='paper' id='paper'></img>
      <img src={scissors} alt='scissors' id='scissors'></img>
    </div>
  );
}

function Welcome({setStatus}){
  return(
    <input type='button' value='Start' onClick={() =>setStatus(true)}></input>
  )
}

function Scorebox(){
  return(
    <div>
      <p>0 - 0</p>
    </div>
  )
}



function App() {
  
  const [hasStarted,setStatus] = useState(false);
  return (
    <>
      <h1>Rock Paper Scissors</h1>
      {(!hasStarted) ?
      <Welcome setStatus={setStatus}/> :
      (<div>
        <GameBox/>
        <Scorebox/>
      </div>)
      }
    </>
  );
}

export default App

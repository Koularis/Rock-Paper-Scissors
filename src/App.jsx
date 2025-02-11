import { useState } from 'react'
import GameBox from './gameLogic';
import './App.css'




function Welcome({setStatus}){
  return(
    <input type='button' value='Start' onClick={() =>setStatus(true)}></input>
  )
}

function Continue(){
  return(
    <h1>Thanks for playing!</h1>
  )
}

function App() {
  
  const [hasStarted,setStatus] = useState(false);
  const [finished, setFinished] = useState(false);
  
  return (
    <>
      <h1>Rock Paper Scissors</h1>
      {(!hasStarted) ?
      <Welcome setStatus={setStatus}/> :
      ((!finished) ?
        <GameBox setFinished={setFinished}/> :
        <Continue />
      )
      }
    </>
  );
}

export default App

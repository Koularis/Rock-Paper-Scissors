import { useState } from 'react'
import GameBox from './gameLogic';
import './App.css'




function Welcome({setStatus}){
  return(
    <input type='button' value='Start' onClick={() =>setStatus(true)}></input>
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
     </div>)
      }
    </>
  );
}

export default App

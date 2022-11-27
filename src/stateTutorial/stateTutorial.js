import React, {useState} from 'react'
import "./stateTutorial.css";

const StateTutorial = () => {
  const [state, setState] = useState(0);
  const increase = ()=>{setState(state+1)} //event handler for onclick
  const decrease = () =>{(state>0) && setState(state-1)} //event handler for onclick
  const reset = () =>{setState(0)}
  return (
    <div>
      <h1> {state} </h1>
      <button onClick={increase}>Increment+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease-</button>
      
    </div>
  );
};
// const [state, setState(2nd argument, used for update) = useState[0]]
// const state = 0-initial state
export default StateTutorial
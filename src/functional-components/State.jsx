import React, { useState } from 'react'

const State =() => {
    const [time,setTime]=useState(0);

    const incrementTime = () =>{
        setTime(time+1);
    }
  return (
    <div>
      <h1>Time:{time} Seconds</h1>
      <button onClick={incrementTime}>Increment Time</button>
    </div>
  )
}

export default State

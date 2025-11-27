import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [conterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(conterTwo + 1)
    }
    
    const isEven = useMemo(()=>{
        let i = 0;
        while (i<20000000) i++
        return counterOne % 2 ===0
    },[counterOne])


  return (
    <div>
      <button onClick={incrementCounterOne}>
        CounterOne :{counterOne}
      </button>

      <button><span>{isEven ? 'even' : 'odd'}</span></button>

      <br /><br />

      <button onClick={incrementCounterTwo}>Counter2:{conterTwo}</button>
    </div>
  )
}

export default Usememo

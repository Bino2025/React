import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        
        const interval = setInterval(()=>{
            setSeconds((b) => b+1);
        },1000);
        // set inrerval creates a timer that runs every 1000 ms(1sec)

        // clean up function (Unmount)
        return ()=> clearInterval(interval);

    },[]);//Empty dependancy -Run once o mount
  return (
    <div>
      <p>Timer: {seconds} sec</p>
    </div>
  )
}

export default Timer

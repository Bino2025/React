import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);//initial value
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseState
// state is an internal data store That belongs to a specific component,And it can be changed over time
import React from 'react'

const Calling_function = () => {

  function getGreeting(name) {
    return `Hello ${name}`;
  }

  function Greeting(){
    return <h1>{getGreeting('bino')}</h1>
  }
  return (
    <div>
      <Greeting/>
    </div>
  )
}

export default Calling_function

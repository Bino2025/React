import React from 'react'

const Conditional = () => {
    const isLoggedIn = false;
  return (
    <div>
      <p>{isLoggedIn ? "welcome back!" : "Please sign in"}</p>
    </div>
  )
}

export default Conditional

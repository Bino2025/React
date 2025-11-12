import React, { useState } from 'react'

const TextInput_useState = () => {

  const [name,setName] = useState('');

  return (
    <div>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <p>Hello,{name || 'stranger'}!</p>
    </div>
  )
}

export default TextInput_useState

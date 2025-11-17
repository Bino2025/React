import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email){
            setMessage('Both fields are requires!');
            return
        }
        const userData ={name,email};
        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/users',userData);
            console.log(res.data);
            setMessage("form submitted")
            
        }catch(error){
            console.error(error);
            setMessage("errror Happend!")
            
        }
    }
    
  return (
    <div>
      <h2>Submit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='namee'
        value={name}
        onChange={(e)=>setName(e.target.value)}  /><br /> <br />
        <input 
        type="email"
        placeholder='email'
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
        <button type='submit'>Submit</button>
      </form>
    <p>{message}</p>
    </div>
  )
}

export default AxiosPost

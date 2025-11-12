import React, { useState } from 'react'

const SimpleForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email){
            setError('Email is Required')
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError("email is invalid")
        }else{
            setError('');
            alert('form submitted successully');
            console.log("form Submitted",email);
            
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
             value={email}
              placeholder='Type Mail'
               onChange={(e) => setEmail(e.target.value)}
                /><br/><br />
                {error && <p style={{color:'red'}}>{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SimpleForm

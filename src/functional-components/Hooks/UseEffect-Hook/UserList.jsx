import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const UserList = () => {

    const[user , setUser] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
    },[]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {user.map(usr =>(
            <li key={usr.id}>
                <h3>{usr.name}</h3>
                <p>Email:{usr.email}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList

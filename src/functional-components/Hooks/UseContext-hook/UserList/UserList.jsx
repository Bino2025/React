import React, { useContext } from 'react'

const UserList = () => {
    
    const {users,loading} = useContext(UserApiContext);
    if (loading){
        return <p>Loading Users....</p>
    }
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((ur)=>(
            <li key={ur.id}>{ur.name}-{ur.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList

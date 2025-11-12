import React, { useState } from 'react'

const ProfileForm = () => {

    const [profile,setProfile] = useState({name:'',age:''});

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setProfile({...profile,[name]:value});
    }
  return (
    <div>
      <input type="text" name='name' onChange={handleChange} placeholder='Name' />
      <input type="text" name="age" onChange={handleChange} placeholder='age' />
      <p>{profile.name} is {profile.age} Years old.</p>
    </div>
  )
}

export default ProfileForm

import axios from 'axios';
import React, { useState } from 'react'

const AxiosPut = () => {
    // State to hold the data for the user we want to update
    const [userIdToUpdate, setUserIdToUpdate] = useState('1'); // Starting with ID 1
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();

        // 1. Basic validation
        if (!userIdToUpdate || !newName || !newEmail) {
            setMessage('All fields are required!');
            return;
        }

        // 2. Data to send in the PUT request body
        const updatedData = {
            id: userIdToUpdate,
            name: newName,
            email: newEmail,
            // Note: For PUT, you often send the *complete* updated object, 
            // but for this example, we'll only send the fields we changed.
        };

        // 3. Define the full URL with the resource ID
        // The jsonplaceholder 'users' endpoint doesn't actually update, but 
        // it simulates a successful PUT response for any valid ID.
        const url = `https://jsonplaceholder.typicode.com/users/${userIdToUpdate}`;

        // 4. Implement try...catch for error handling
        try {
            // Perform the PUT request
            const res = await axios.put(url, updatedData);

            console.log('Update Response:', res.data);

            // The jsonplaceholder API will return the submitted data plus the ID.
            setMessage(`User ${userIdToUpdate} updated! Status: ${res.status}`);

            // Optional: Clear the form
            // setNewName('');
            // setNewEmail('');
            
        } catch (error) {
            console.error('PUT Error:', error);
            // Check for specific error response
            if (error.response) {
                setMessage(`Error: ${error.response.status} - ${error.response.statusText}`);
            } else {
                setMessage("An error happened! Check console for details.");
            }
        }
    }
    
  return (
    <div>
      <h2>Update User (PUT Request) </h2>
      <form onSubmit={handleUpdate}>
        <input 
          type="number"
          placeholder='User ID to update (e.g., 1)'
          value={userIdToUpdate}
          onChange={(e) => setUserIdToUpdate(e.target.value)} 
        /><br /> <br />
        <input 
          type="text"
          placeholder='New Name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)} 
        /><br /> <br />
        <input 
          type="email"
          placeholder='New Email'
          value={newEmail} 
          onChange={(e) => setNewEmail(e.target.value)}
        /> <br /><br />
        <button type='submit'>Update User</button>
      </form>
    <p style={{ fontWeight: 'bold' }}>{message}</p>
    </div>
  )
}

export default AxiosPut
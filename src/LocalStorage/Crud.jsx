import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // load users from local storae
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.error("error parsing data", error);
                localStorage.removeItem("users");//clear corrupted data
            }
        }
        setIsLoading(true);//mark as load
    }, [])

    // save users to Local Storage
    useEffect(() => {
        if (isLoading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoading])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;
        if (!name.trim()) newErrors.name = 'name is required';

        if (!email) newErrors.email = 'Email is invalid!';
        else if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newErrors.email = 'Email is invalid';


        if (!age) newErrors.age = 'age is required';
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "age must be between 1 and 120";
        return newErrors;
    }

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])
        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });

        setError({});

    }

    const handleEdit = (us) => {
        setFormData(us);
        setEditMode(true);
    }

    const handleCancel = () => {
        setFormData({ id: '', name: '', email: '', age: '' })
        setEditMode(false);
        setError({})
    }
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
    const handleClearAll = () => {
        if (window.confirm('are you sure ? this cant be undone!.')) {
            setUsers([]);
            localStorage.removeItem('users');
            // also clear the form if in editmode
            if (editMode) {
                setFormData({ id: '', name: '', age: '', email: '' });
                setEditMode(false);
                setError({});
            }
        }
    }

    return (
        <div className='formnew'>
            <h1>React Crud-simpleForm</h1>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='name' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                {/* email */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='email' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                {/* age */}
                <div>
                    <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='age' />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}
                </div>

                <button type='submit' style={{}}>{editMode ? 'update user' : 'add user'}</button>
                {
                    editMode && (
                        <button type='button' onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel </button>
                    )
                }
            </form>

            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2>User List</h2>
                {/* clear data button */}
                {users.length > 0 && (
                    <button
                        style={{
                            color: 'white',
                            background: '#dc345',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginLeft: '30px'

                        }}
                        onClick={handleClearAll}
                    >Clear All Data</button>
                )}
            </div>
            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(us => (
                            <tr key={us.id}>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(us)}>Edit</button>
                                    <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(us.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Users Added</p>
            )}
        </div>
    )
}

export default Crud

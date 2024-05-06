import React, { useState } from 'react'

const AddUser = ({addUserData}) => {
    const [formData, setFormData] = useState({name: "", email: "", id: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    };

    const handleSubmit = () => {
        const newUser = {
            name: formData.name,
            email: formData.email,
            id: Math.random() + Date.now();
        };
        addUserData(newUser);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : 
            <input type='text' name='name' value={formData.name} onChange={handleChange} /> 
        </label>
        <label>Email : 
            <input type='text' name='email' value={formData.email} onChange={handleChange} /> 
        </label>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default AddUser

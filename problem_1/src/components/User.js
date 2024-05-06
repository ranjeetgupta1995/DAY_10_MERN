import React, { useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([]);

    

  return (
    <div>
      <ul>
        {users.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User


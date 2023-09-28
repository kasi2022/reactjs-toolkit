import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch user data from JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Update the 'users' state variable with the fetched data
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            {/* Add other user properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

import React, { useState } from 'react';
import API from '../api'; // Import the Axios base instance

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const payload = { username, password };
    try {
      const response = await API.post('/register', payload);
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error.response);
    }
  };

  return (
    <div className="p-4">
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
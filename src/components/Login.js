import React, { useState } from 'react';
import API from '../api'; // Import the Axios base instance

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const payload = { username, password };
    try {
      const response = await API.post('/login', payload);
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error.response);
    }
  };

  return (
    <div className="p-4">
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
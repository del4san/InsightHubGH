import React, { useState } from 'react';

const RegisterForm: React.FC<{ onRegister: (token: string, role: string) => void }> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('viewer');

  const register = async () => {
    const res = await fetch('/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      onRegister(data.token, data.role);
    } else {
      alert(data.error || 'Registration failed');
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default RegisterForm;
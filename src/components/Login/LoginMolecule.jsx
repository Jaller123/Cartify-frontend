// src/components/Login/LoginMolecule.jsx
import React, { useState } from 'react';
import styles from './Login.module.css';
import UserAtom from '../Input/UserAtom';
import PasswordAtom from '../Input/PasswordAtom';
import LoginButtonAtom from './LoginButtonAtom';
import { loginUser } from '../api';

const LoginMolecule = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      setMessage('');
      return;
    }

    try {
      const data = await loginUser(username, password);
      setMessage(`Welcome ${data.user.username}!`);
      setError(''); // Clear any error
    } catch (err) {
      setError(err.message || 'Incorrect credentials.');
      setMessage(''); // Clear any success message
    }
  };

  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <LoginButtonAtom onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
      {message && <div className={styles.successText}>{message}</div>}
    </div>
  );
};

export default LoginMolecule;

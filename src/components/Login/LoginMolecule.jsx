import React, { useState } from 'react';
import styles from './Login.module.css';
import UserAtom from '../Input/UserAtom';
import PasswordAtom from '../Input/PasswordAtom';
import LoginButtonAtom from './LoginButtonAtom';
import CreateAccountBtnAtom from './CreateAccountBtnAtom'
import { loginUser } from '../api';

const LoginMolecule = ({ onCreateAccount, onLoginSuccess  }) => {
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
      localStorage.setItem('token', data.token)
      console.log('Token:', data.token)
      setMessage(`Welcome ${data.user.username}! Redirecting...`);
      setError('');
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(); 
      }, 1000);
    } catch (err) {
      setError(err.message || 'Incorrect Credentials');
      setMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <LoginButtonAtom onClick={handleLogin} /> 
      <CreateAccountBtnAtom onClick={onCreateAccount} label="Create An Account" />
      {error && <div className={styles.errorText}>{error}</div>}
      {message && <div className={styles.successText}>{message}</div>}
    </div>
  );
};

export default LoginMolecule;

import { useState } from 'react';

import { useAuth } from '@hooks/authHooks';

import styles from '../styles/auth.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles['auth-container']}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit'>Login</button>
        <p>
          Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

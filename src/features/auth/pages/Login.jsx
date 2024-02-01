import { useState } from 'react';

import styles from '../styles/auth.module.css';
import { login } from '@services/authServices';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const user = login(email, password);

    console.log({ user });
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
      </form>
    </div>
  );
};

export default Login;

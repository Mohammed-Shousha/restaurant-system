import { useState } from 'react';

import { signUp } from '@services/authServices';

import styles from '../styles/auth.module.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(email, password);

    console.log({ user });
  };

  return (
    <div className={styles['auth-container']}>
      <h1>Sign Up</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

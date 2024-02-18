import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth } from '@features/auth/authHooks';

import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import FormRowVertical from '@components/FormRowVertical';

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
    <>
      <h1
        // as='h1'
        onClick={() =>
          toast('To login as an admin\n email: admin@system.com \n pw: 123456')
        }
      >
        Login
      </h1>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label='Email address'>
          <Input
            type='text'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
        </FormRowVertical>
        <FormRowVertical label='Password'>
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button type='submit'>Login</Button>
        </FormRowVertical>
        <p>
          Don&apos;t have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </Form>
    </>
  );
};

export default Login;

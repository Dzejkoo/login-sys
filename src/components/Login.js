import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('Login');
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
      console.log('Login succes');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <h2>Log In</h2>
        {error ? `${error}` : null}
        <div id="email">
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div id="password">
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button disabled={loading} type="submit">
          Log In
        </button>
      </Wrapper>
      <div>
        Need an accound? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

const Wrapper = styled.form``;

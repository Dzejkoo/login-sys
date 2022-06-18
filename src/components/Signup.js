import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //check two input password
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password o not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failde create accound');
    }
    setLoading(false);
  }

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error ? `${error}` : null}
        <div id="email">
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div id="password">
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <div id="password-confirm">
          <label>Password Confirmation</label>
          <input type="password" ref={passwordConfirmRef} required />
        </div>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </Wrapper>
      <div>
        Already have a account? <Link to="/login">Logi In</Link>
      </div>
    </>
  );
}

const Wrapper = styled.form``;

import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');
  let navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }
  return (
    <>
      <h2>Dashboard</h2>
      {error ? `${error}` : null}
      <strong>Email:</strong>
      {currentUser.email}
      <button variant="link" onClick={handleLogout}>
        {' '}
        Log Out
      </button>
    </>
  );
}

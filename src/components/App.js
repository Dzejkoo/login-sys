import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';

const App = () => {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
};

export default App;

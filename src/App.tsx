import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './pages/Dashboard';

function App() {
  // TODO: Implement actual authentication logic
  const isAuthenticated = true;

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm onSubmit={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
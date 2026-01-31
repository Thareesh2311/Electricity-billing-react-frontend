import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, such as authentication with a server
    if (email === 'example@example.com' && password === 'password') {
      // Successful login
      setError('');
      console.log('Login successful!');
    } else {
      // Failed login
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>Login to Power Portal</h1>
      </header>
      <main>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <Link to="/">Go to Home Page</Link></p>
      </main>
      <footer className="login-footer">
        <p>This is the login page of Power Portal. Please enter your credentials to access your account.</p>
      </footer>
    </div>
  );
}

export default LoginPage;

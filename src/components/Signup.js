import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Signup.css'; // Import Signup CSS

function SignupPage() {
  return (
    <div className="Signup-container">
      <h1>Power Portal</h1>
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      <p>Go back to <Link to="/">Home Page</Link></p>
    </div>
  );
}

export default SignupPage;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/About.css';

function AboutPage() {
  return (
    <div className="about-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Power Portal</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <NavItem link="/login" label="Login" />
              <NavItem link="/signup" label="Signup" />
              <NavItem link="/profile" label="Profile" />
              <NavItem link="/about" label="About" />
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1>About Power Portal</h1>
        <p>Power Portal is a web application designed to help users manage their electricity bills efficiently. Our platform provides various features to simplify the process of monitoring and paying electricity bills.</p>
        <h2>Features:</h2>
        <ul>
          <li>View detailed information about your electricity usage.</li>
          <li>Receive notifications about upcoming bill payments.</li>
          <li>Track your billing history and compare usage over time.</li>
          <li>Secure online payment options for hassle-free bill settlements.</li>
        </ul>
        <h2>Terms and Conditions:</h2>
        <p>By using Power Portal, you agree to the following terms and conditions:</p>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          <li>You must provide accurate and complete information when registering for an account.</li>
          <li>Unauthorized use of the platform is prohibited.</li>
          <li>We reserve the right to suspend or terminate your account at any time if you violate these terms.</li>
        </ul>
        <h2>About Electricity Billing Apps:</h2>
        <p>Electricity billing apps like Power Portal are designed to streamline the process of managing electricity bills for both residential and commercial users. These apps offer convenience, efficiency, and transparency in tracking and paying electricity usage, ultimately helping users better manage their energy consumption and expenses.</p>
      </div>
    </div>
  );
}

// Navigation Item component
const NavItem = ({ link, label }) => (
  <li className="nav-item">
    <Link to={link} className="nav-link">{label}</Link>
  </li>
);

export default AboutPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faBell, faLanguage, faPalette } from '@fortawesome/free-solid-svg-icons';
import '../styles/Settings.css'; // Import your custom CSS file

/* Add your custom styles below */


function SettingsPage() {
  // State variables for managing user preferences
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingCycle] = useState('monthly');
  const [privacySettings, setPrivacySettings] = useState('');
  const [securitySettings, setSecuritySettings] = useState('');
  const [dataExport, setDataExport] = useState('');

  // Function to handle password change
  const handlePasswordChange = () => {
    // Logic to update user's account password
    console.log('Password changed successfully');
  };

  // Function to handle email update
  const handleEmailUpdate = () => {
    // Logic to update user's account email
    console.log('Email updated successfully');
  };

  // Function to handle notification settings
  const handleNotificationSettings = () => {
    // Logic to update user's notification preferences
    console.log('Notification settings updated successfully');
  };

  // Function to handle language preferences
  const handleLanguageChange = () => {
    // Logic to update user's preferred language
    console.log('Language preference updated successfully');
  };

  // Function to handle theme preferences
  const handleThemeChange = () => {
    // Logic to update user's preferred theme
    console.log('Theme preference updated successfully');
  };

  // Function to handle billing preferences
  const handleBillingPreferences = () => {
    // Logic to update user's billing preferences
    console.log('Billing preferences updated successfully');
  };

  // Function to handle account deactivation
  const handleAccountDeactivation = () => {
    // Logic to deactivate user's account
    console.log('Account deactivated successfully');
  };

  // Function to handle privacy settings
  const handlePrivacySettings = () => {
    // Logic to update user's privacy settings
    console.log('Privacy settings updated successfully');
  };

  // Function to handle security settings
  const handleSecuritySettings = () => {
    // Logic to update user's security settings
    console.log('Security settings updated successfully');
  };

  // Function to handle data export
  const handleDataExport = () => {
    // Logic to export user's data
    console.log('Data exported successfully');
  };

  return (
    <div className="settings-container">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Power Portal</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem link="/profile" label="Profile" />
              <NavItem link="/settings" label="Settings" />
              <NavItem link="/about" label="About" />
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h1>Settings</h1>
        <div className="card p-3 mt-3">
          <h2><FontAwesomeIcon icon={faLock} /> Password</h2>
          <div className="form-group">
            <label>New Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary mt-2" onClick={handlePasswordChange}>Change Password</button>
          </div>
        </div>
        <div className="card p-3 mt-3">
          <h2><FontAwesomeIcon icon={faEnvelope} /> Email</h2>
          <div className="form-group">
            <label>New Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn-primary mt-2" onClick={handleEmailUpdate}>Update Email</button>
          </div>
        </div>
        <div className="card p-3 mt-3">
          <h2><FontAwesomeIcon icon={faBell} /> Notification Settings</h2>
          <div className="form-group">
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            <label className="ml-2">Receive Notifications</label>
            <button className="btn btn-primary mt-2" onClick={handleNotificationSettings}>Save Settings</button>
          </div>
        </div>
        <div className="card p-3 mt-3">
          <h2><FontAwesomeIcon icon={faLanguage} /> Language</h2>
          <div className="form-group">
            <label>Choose Language:</label>
            <select className="form-control" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
            <button className="btn btn-primary mt-2" onClick={handleLanguageChange}>Save Language</button>
          </div>
        </div>
        <div className="card p-3 mt-3">
          <h2><FontAwesomeIcon icon={faPalette} /> Theme</h2>
          <div className="form-group">
            <label>Choose Theme:</label>
            <select className="form-control" value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <button className="btn btn-primary mt-2" onClick={handleThemeChange}>Save Theme</button>
          </div>
        </div>
        {/* Add more settings options here */}
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

export default SettingsPage;

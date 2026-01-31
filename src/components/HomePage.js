import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Home.css';

function HomePage() {
  
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Power Portal</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <NavItem link="/login" label="Login" />
              <NavItem link="/profile" label="Profile" />
              <NavItem link="/about" label="About" />
              <NavItem link="/Settings" label="Settings" />
              <NavItem link="/BillingRecords" label="BillingRecords" />
              <NavItem link="/Contact" label="Contacts" />
              <NavItem link="/UnitCalculator" label="UnitCalculator" />
              <NavItem link="/Payment" label="Payment" />
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main role="main">
        <header className="text-center py-5">
          <h1 className="display-4">Welcome to Power Portal</h1>
          <p className="lead">Manage your electricity bills efficiently.</p>
        </header>
        <section className="text-center">
          {/* Changed the "Get Started" text to a Link button */}
          <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
        </section>
        <section className="search-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; 2024 Power Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Navigation Item component
const NavItem = ({ link, label }) => (
  <li className="nav-item">
    <Link to={link} className="nav-link">{label}</Link>
  </li>
);

export default HomePage;

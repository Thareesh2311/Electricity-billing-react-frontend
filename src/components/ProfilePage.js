import React from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import '../styles/Profile.css';

function ProfilePage() {
  // Dummy billing history data
  const billingHistoryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Billing History',
        data: [100, 200, 150, 300, 250, 400],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  React.useEffect(() => {
    // Create chart
    const ctx = document.getElementById('billingHistoryChart');
    new Chart(ctx, {
      type: 'line',
      data: billingHistoryData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h3>User Profile</h3>
            </div>
            <div className="card-body">
              <div className="profile-header">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="profile-pic" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" className="form-control" value="JohnDoe" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="form-control" value="johndoe@example.com" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" className="form-control" value="John Doe" readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea id="address" className="form-control" readOnly>123 Street, City, Country</textarea>
              </div>
              {/* Additional billing-related details */}
              <div className="form-group">
                <label htmlFor="billingInfo">Billing Information:</label>
                <textarea id="billingInfo" className="form-control" readOnly>
                  Monthly electricity usage: 300 kWh
                  Last billing date: January 1, 2024
                  Due amount: 41,67,535.00 /-
                </textarea>
              </div>
              {/* Billing History Graph */}
              <div className="form-group">
                <canvas id="billingHistoryChart" width="400" height="200"></canvas>
              </div>
              <div className="text-center">
                <Link to="/" className="btn btn-primary">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

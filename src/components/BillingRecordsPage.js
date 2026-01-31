import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import '../styles/BillingRecords.css';

function BillingRecordsPage() {
  // Sample billing records data
  const billingRecords = [
    { date: '2024-04-01', amount: '879.00', status: 'Pending' },
    { date: '2024-03-01', amount: '567.00', status: 'Paid' },
    { date: '2024-02-01', amount: '989.00', status: 'Paid' },
    { date: '2024-01-01', amount: '1221.00', status: 'Paid' },
    { date: '2023-12-01', amount: '1245.00', status: 'Paid' },
    { date: '2023-11-01', amount: '955.00', status: 'Paid' },
    // Add more billing records as needed
  ];

  return (
    <div className="container">
      <header className="header">
        <nav>
          <ul className="navigation-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="billing-records">
          <h1 className="mt-5 text-center font-weight-bold">Billing Records</h1>
          <div className="row">
            <div className="col">
              <div className="text-right mb-3">
                <Link to="/payment" className="btn btn-success mr-2">Make Payment</Link>
                <Link to="/profile" className="btn btn-info">View Your Details</Link>
              </div>
            </div>
          </div>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount (Rs)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {billingRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.amount}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Download Bill button */}
          <div className="text-center mt-3">
            <Button variant="primary">Download Bill</Button>
          </div>
        </section>
      </main>

      <footer>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default BillingRecordsPage;

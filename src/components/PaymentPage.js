import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/PaymentPage.css'; // Import custom CSS file

function PaymentPage() {
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle payment submission
    // For demonstration purposes, navigate to homepage after successful payment
    history.push('/');

    // Clear form fields after submission
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleUPIPayment = () => {
    // Replace 'upi://pay' with the actual deep link to the UPI app
    window.location.href = 'upi://pay'; // Example deep link
  };

  return (
    <div className="payment-container">
      <h2>Make Payment</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiration Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Enter CVV"
            required
          />
        </div>
        <button type="submit">Pay Now</button>
        <button type="button" onClick={handleUPIPayment}>Pay with UPI</button>
      </form>
    </div>
  );
}

export default PaymentPage;

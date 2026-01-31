import React, { useState } from 'react';
import '../styles/Contact.css';

function ContactPage() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to submit feedback
    console.log('Feedback submitted:', feedback);
    // Optionally, you can clear the feedback input field after submission
    setFeedback('');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Customer Support</h2>
        <p>If you have any questions or need assistance, please don't hesitate to contact our customer support team:</p>
        <ul>
          <li>Email: support@powerportal.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="business-info">
        <h2>Business Inquiries</h2>
        <p>For business-related inquiries, please contact:</p>
        <ul>
          <li>Email: business@powerportal.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 456 Business Avenue, City, Country</li>
        </ul>
      </div>
      <div className="feedback-section">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback..."
            rows={4}
            cols={50}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

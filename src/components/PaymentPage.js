import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/PaymentPage.css';
const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    amount: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentData.cardNumber || !paymentData.cardExpiry || !paymentData.cardCvc || !paymentData.amount) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/payments', paymentData);

      if (response.data.success) {
        alert('Payment successful!');
        navigate('/success'); // Redirect to a success page or another route
      } else {
        alert('Payment successful!');
        navigate('/success');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Expiry Date:</label>
          <input
            type="text"
            id="cardExpiry"
            name="cardExpiry"
            value={paymentData.cardExpiry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardCvc">CVC:</label>
          <input
            type="text"
            id="cardCvc"
            name="cardCvc"
            value={paymentData.cardCvc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;

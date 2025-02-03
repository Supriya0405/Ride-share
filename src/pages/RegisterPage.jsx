import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/images/reg.jpg';  // Path to your image

const RegisterPage = ({ onNext }) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting user:", user); // Debugging - Log user data

    // Make the API call
    axios
      .post('http://localhost:5000/api/auth/register', user)
      .then((response) => {
        alert('Registration Successful');
        onNext(); // Proceed to the next step on success
      })
      .catch((error) => {
        console.error('Registration Error:', error);  // Log the complete error

        if (error.response) {
          // Log the response data and status code to better understand the error
          console.error('Error Response Data:', error.response.data);
          console.error('Error Response Status:', error.response.status);

          // Display the error message from the backend
          setError(error.response.data || 'Registration failed. Please try again.');
        } else if (error.request) {
          // If no response from the server
          console.error('No Response from Server:', error.request);
          setError('Server did not respond. Please try again later.');
        } else {
          // Catch any other error
          console.error('Unknown Error:', error.message);
          setError('An unexpected error occurred. Please try again.');
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Set to full height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '8px' }}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegisterPage;

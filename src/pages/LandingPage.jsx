// src/pages/LandingPage.jsx
import React from 'react';
import rideShareImage from '../assets/images/landingpage.jpg';  // Adjust path accordingly

const LandingPage = ({ onStart }) => {
  const pageStyle = {
    backgroundImage: `url(${rideShareImage})`,  // Using the imported image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const contentStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>RideShare</h1>
        <p style={paragraphStyle}>Your Journey Begins Here</p>
        <button style={buttonStyle} onClick={onStart}>
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

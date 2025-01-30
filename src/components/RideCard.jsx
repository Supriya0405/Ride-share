import React from 'react';
import { useNavigate } from 'react-router-dom';

const RideCard = ({ ride }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate('/ride-details', { state: { ride } });
  };

  return (
    <div className="ride-card">
      <h3>{ride.from} → {ride.to}</h3>
      <p>{ride.date}</p>
      <p>Seats Available: {ride.seats}</p>
      <button onClick={handleDetails}>View Details</button>
    </div>
  );
};

export default RideCard;

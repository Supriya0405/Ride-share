import React from 'react';

function RideDetailsPage({ ride, onBack }) {
  return (
    <div>
      <h2>Ride Details</h2>
      <p><strong>Origin:</strong> {ride.origin}</p>
      <p><strong>Destination:</strong> {ride.destination}</p>
      <p><strong>Date:</strong> {ride.date}</p>
      <p><strong>Available Seats:</strong> {ride.availableSeats}</p>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default RideDetailsPage;

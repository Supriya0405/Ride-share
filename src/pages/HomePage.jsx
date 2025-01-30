import React, { useState, useEffect } from 'react';

function HomePage({ rides, addRide, onSelectRide }) {
  const [newRide, setNewRide] = useState({
    origin: '',
    destination: '',
    date: '',
    availableSeats: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRide(newRide);
    setNewRide({ origin: '', destination: '', date: '', availableSeats: '' });
  };

  useEffect(() => {
    console.log("Home Page Loaded");
  }, []);

  return (
    <div>
      <h1>Ride Sharing Platform</h1>

      {/* Form to add a new ride */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Origin"
          value={newRide.origin}
          onChange={(e) => setNewRide({ ...newRide, origin: e.target.value })}
        />
        <input
          type="text"
          placeholder="Destination"
          value={newRide.destination}
          onChange={(e) => setNewRide({ ...newRide, destination: e.target.value })}
        />
        <input
          type="date"
          value={newRide.date}
          onChange={(e) => setNewRide({ ...newRide, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Available Seats"
          value={newRide.availableSeats}
          onChange={(e) => setNewRide({ ...newRide, availableSeats: e.target.value })}
        />
        <button type="submit">Add Ride</button>
      </form>

      {/* Display available rides */}
      <div>
        <h2>Available Rides</h2>
        {rides.length === 0 ? (
          <p>No rides available</p>
        ) : (
          rides.map((ride) => (
            <div key={ride.id} className="card">
              <h3>{ride.origin} to {ride.destination}</h3>
              <p>Date: {ride.date}</p>
              <p>Available Seats: {ride.availableSeats}</p>
              <button onClick={() => onSelectRide(ride)}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;

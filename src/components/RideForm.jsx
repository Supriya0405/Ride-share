import React, { useState } from 'react';

const RideForm = ({ addRide }) => {
  const [ride, setRide] = useState({ from: '', to: '', date: '', seats: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRide({ ...ride, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ride.from && ride.to && ride.date && ride.seats) {
      addRide(ride);
      setRide({ from: '', to: '', date: '', seats: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from"
        placeholder="From"
        value={ride.from}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to"
        placeholder="To"
        value={ride.to}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={ride.date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="seats"
        placeholder="Seats"
        value={ride.seats}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Ride</button>
    </form>
  );
};

export default RideForm;

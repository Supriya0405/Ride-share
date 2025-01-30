// src/pages/PlaceDetailsPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlaceDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { place } = location.state || {};

  if (!place) return <div>No place details available.</div>;

  const { name } = place;

  // Sample data for travel time and taxi availability
  const placeDetails = {
    Coimbatore: { travelTime: '3 hours', taxiAvailable: 'Yes' },
    Salem: { travelTime: '2.5 hours', taxiAvailable: 'Yes' },
    Chennai: { travelTime: '5 hours', taxiAvailable: 'Yes' },
    Madurai: { travelTime: '4 hours', taxiAvailable: 'Yes' },
  };

  const details = placeDetails[name] || { travelTime: 'N/A', taxiAvailable: 'N/A' };

  return (
    <div className="place-details-page p-6">
      <h2 className="text-3xl font-semibold">{name} Details</h2>
      <p><strong>Travel Time:</strong> {details.travelTime}</p>
      <p><strong>Taxi Available:</strong> {details.taxiAvailable}</p>
      <button onClick={() => navigate("/places")} className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Back to Places
      </button>
    </div>
  );
};

export default PlaceDetailsPage;

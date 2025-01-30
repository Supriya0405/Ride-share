// src/pages/PlacesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import images for each place
import coimbatoreImage from '../assets/images/coimbatore.jpg';
import salemImage from '../assets/images/salem.jpg';
import chennaiImage from '../assets/images/chennai.jpg';
import maduraiImage from '../assets/images/madurai.jpg';

const places = [
  { id: 1, name: 'Coimbatore', image: coimbatoreImage },
  { id: 2, name: 'Salem', image: salemImage },
  { id: 3, name: 'Chennai', image: chennaiImage },
  { id: 4, name: 'Madurai', image: maduraiImage },
];

const PlacesPage = () => {
  const navigate = useNavigate(); // Use useNavigate to navigate between pages

  const handlePlaceClick = (place) => {
    navigate('/place-details', { state: { place } }); // Navigate to place details page
  };

  return (
    <div className="places-page">
      <h2 className="text-3xl font-semibold text-center mb-6">Choose a Place</h2>
      <div className="places-list grid grid-cols-2 md:grid-cols-4 gap-4">
        {places.map((place) => (
          <div
            key={place.id}
            onClick={() => handlePlaceClick(place)}
            className="place-card cursor-pointer hover:shadow-lg p-4 rounded-lg shadow-md text-center"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{place.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;

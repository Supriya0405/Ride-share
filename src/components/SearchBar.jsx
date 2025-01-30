import React from 'react';

const SearchBar = ({ searchRides }) => {
  const handleSearch = (e) => {
    searchRides(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a ride"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

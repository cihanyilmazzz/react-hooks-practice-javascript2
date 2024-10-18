import React from 'react';

// SearchBar component receives searchTerm and setSearchTerm function as props
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        // Update searchTerm state when input value changes
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

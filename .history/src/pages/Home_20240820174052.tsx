// src/pages/Home.tsx
import React, { useState } from 'react';
import Banner from '../components/Banner'; // Adjust path as needed
import BookList from '../components/BookList'; // Adjust path as needed
import Filter from '../components/Filter'; // Adjust path as needed

const filters = {
  genre: ['Fiction', 'Non-Fiction', 'Science', 'History'],
  availability: ['true', 'false'],
  location: ['Library A', 'Library B', 'Library C']
};

const Home: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string }>({
    genre: '',
    availability: '',
    location: ''
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  return (
    <div>
      <Banner title="Welcome to the Book Sharing App!" description="Explore our collection of books" />
      <div className="p-4">
        <Filter
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <BookList
          filters={filters}
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  );
};

export default Home;

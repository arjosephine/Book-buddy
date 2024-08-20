// src/pages/Home.tsx
import React, { useState } from 'react';
import Banner from '../components/Banner'; // Adjust path as needed
import BookList from '../components/BookList'; // Adjust path as needed
import Filter from '../components/Filter'; // Adjust path as needed
import bannerImage from '../assets/images/banner-bg.jpg'; // Replace with your actual image path

const filters = {
  genre: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Auto-Biography'],
  availability: ['Yes', 'No'],
  location: ['Library A', 'Library B', 'Library C', 'Library D' ]
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
      <Banner
        title="Welcome to the Book Sharing App!"
        description="Explore our collection of books"
        backgroundImage={bannerImage} // Provide the backgroundImage prop
      />
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

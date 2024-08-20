// src/pages/Home.tsx
import React, { useState } from 'react';
import Banner from '../components/Banner'; // Adjust path as needed
import BookList from '../components/BookList'; // Adjust path as needed
import Filter from '../components/Filter'; // Adjust path as needed
import backgroundImage from '../assets/images/numberofBooks.jpg' // Replace with your actual image path
import bannerImage from '../assets/images/banner-bg.jpg'; // Replace with your actual image path

const filters = {
  genre: ['Fiction', 'Non-Fiction', 'Science', 'History'],
  availability: ['Available', 'Not Available'],
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
    <div className="relative overflow-hidden">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Banner
          title="Welcome to the Book Sharing App!"
          description="Explore our collection of books"
          bannerImage={bannerImage} // Provide the backgroundImage prop if needed in Banner
        />
        <div className="p-4 bg-white bg-opacity-80">
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
    </div>
  );
};

export default Home;

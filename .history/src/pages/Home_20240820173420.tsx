// src/pages/Home.tsx
import React, { useState } from 'react';
import Banner from '../components/Banner'; // Adjust path as needed
import BookList from '../components/BookList'; // Adjust path as needed
import Filter from '../components/Filter'; // Adjust path as needed
import backgroundImage from '../assets/images/banner-bg.jpg'; // Update with your actual image path

const Home: React.FC = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('');
  const [genreFilter, setGenreFilter] = useState<string>('');

  const availabilityOptions = [
    { label: 'Available', value: 'available' },
    { label: 'Not Available', value: 'not-available' },
  ];

  const genreOptions = [
    { label: 'Fiction', value: 'fiction' },
    { label: 'Non-Fiction', value: 'non-fiction' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
  ];

  return (
    <div>
      <Banner
        title="Welcome to the Book Sharing App!"
        description="Explore our collection of books"
        backgroundImage={backgroundImage}
      />
      <div className="container mx-auto px-4 py-4">
        <Filter
          options={availabilityOptions}
          selectedValue={availabilityFilter}
          onFilterChange={setAvailabilityFilter}
          filterLabel="Filter by Availability"
        />
        <Filter
          options={genreOptions}
          selectedValue={genreFilter}
          onFilterChange={setGenreFilter}
          filterLabel="Filter by Genre"
        />
        <BookList
          availabilityFilter={availabilityFilter}
          genreFilter={genreFilter}
        />
      </div>
    </div>
  );
};

export default Home;

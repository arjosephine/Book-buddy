// src/pages/Home.tsx
import React from 'react';
import Banner from '../components/Banner'; // Adjust path as needed
import BookList from '../components/BookList'; // Adjust path as needed
import backgroundImage from '../assets/images/bookshare.jpg'; // Update with your actual image path

const Home: React.FC = () => {
  return (
    <div>
      <Banner
        title="Welcome to the Book Sharing App!"
        description="Explore our collection of books"
        backgroundImage={backgroundImage}
      />
      <BookList />
      {/* Add more content for the Home page if needed */}
    </div>
  );
};

export default Home;

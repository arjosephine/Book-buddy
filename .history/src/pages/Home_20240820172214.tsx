// src/pages/Home.tsx
import React from 'react';
import Banner from '../components/Banner';
import BookList from '../components/BookList'; // Adjust path as needed

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold">Welcome to the Book Sharing App!</h1>
      <BookList />
      {/* Add more content for the Home page if needed */}
    </div>
  );
};

export default Home;

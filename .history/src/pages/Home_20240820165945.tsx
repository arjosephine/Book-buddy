// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';

const Home: React.FC = () => {
  return (
    <>
      <Header appName="Book Sharing App" />
      <main className="container mx-auto mt-8">
        <BookList />
      </main>
    </>
  );
};

export default Home;

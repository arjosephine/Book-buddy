import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner
        title="Welcome to the Book Store"
        subtitle="Discover your next great read"
        backgroundImage="/path-to-banner-image.jpg" // Replace with actual image path
      />
      <div className="container mx-auto px-4 py-6">
        {/* Add other content or components for the homepage here */}
        <p className="text-center">Explore our collection of books and start sharing today!</p>
      </div>
    </Layout>
  );
};

export default Home;

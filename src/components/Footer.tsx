import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-4">
      <p>&copy; {new Date().getFullYear()} Book Sharing App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

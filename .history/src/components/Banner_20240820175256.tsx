// src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  bannerImage: string; // Added backgroundImage prop
}

const Banner: React.FC<BannerProps> = ({ title, description, bannerImage }) => {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ bannerImage: `url(${bannerImage})` }}
    >
      <div className="flex items-center justify-center h-full bg-gray-800 bg-opacity-50">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

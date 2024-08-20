// src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string; // URL for the background image
}

const Banner: React.FC<BannerProps> = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center text-white py-20 px-8 mb-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Banner;

import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center py-10 px-5 text-white text-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: !backgroundImage ? '#4A90E2' : undefined,
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default Banner;

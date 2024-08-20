// src/components/Header.tsx
import React from 'react';
import { FaUserCircle, FaBell, FaSearch } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="App Logo" className="h-8" />
        </div>
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold">{appName}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <FaBell className="text-2xl" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <FaUserCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

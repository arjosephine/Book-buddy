// src/components/Filter.tsx
import React from 'react';

interface FilterProps {
  options: { [key: string]: string[] }; // e.g., { genre: ['Fiction', 'Non-Fiction'], availability: ['Available', 'Not Available'], location: ['Library', 'Online'] }
  selectedFilters: { [key: string]: string };
  onFilterChange: (filterType: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ options, selectedFilters, onFilterChange }) => {
  const handleChange = (filterType: string, value: string) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="space-y-4">
      {Object.keys(options).map((filterType) => (
        <div key={filterType}>
          <h3 className="font-semibold text-lg">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</h3>
          <div className="flex flex-wrap space-x-4">
            {options[filterType].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 border rounded-lg ${selectedFilters[filterType] === option ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                onClick={() => handleChange(filterType, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;

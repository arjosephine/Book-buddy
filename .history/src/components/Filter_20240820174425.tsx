// src/components/Filter.tsx
import React from 'react';

interface FilterProps {
  filters: {
    genre: string[];
    availability: string[];
    location: string[];
  };
  selectedFilters: { [key: string]: string };
  onFilterChange: (filterName: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, selectedFilters, onFilterChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      {Object.entries(filters).map(([filterName, options]) => (
        <div key={filterName} className="flex-1">
          <label className="block text-sm font-medium text-gray-700">{filterName.charAt(0).toUpperCase() + filterName.slice(1)}</label>
          <select
            value={selectedFilters[filterName] || ''}
            onChange={(e) => onFilterChange(filterName, e.target.value)}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select {filterName}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filter;

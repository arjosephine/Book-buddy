// src/components/Filter.tsx
import React from 'react';

interface FilterProps {
  filters: {
    [key: string]: string[];
  };
  selectedFilters: {
    [key: string]: string;
  };
  onFilterChange: (filterName: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, selectedFilters, onFilterChange }) => {
  return (
    <div className="space-y-4">
      {Object.keys(filters).map((filterName) => (
        <div key={filterName}>
          <label className="block text-sm font-medium text-gray-700">{filterName}</label>
          <select
            value={selectedFilters[filterName] || ''}
            onChange={(e) => onFilterChange(filterName, e.target.value)}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">All</option>
            {filters[filterName].map((option) => (
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

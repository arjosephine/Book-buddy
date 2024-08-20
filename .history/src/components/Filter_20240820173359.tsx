// src/components/Filter.tsx
import React from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  options: FilterOption[];
  selectedValue: string;
  onFilterChange: (value: string) => void;
  filterLabel: string; // Label for the filter
}

const Filter: React.FC<FilterProps> = ({ options, selectedValue, onFilterChange, filterLabel }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">{filterLabel}</label>
      <select
        value={selectedValue}
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

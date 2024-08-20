// src/components/Filter.tsx
import React from 'react';

interface FilterProps {
  onFilter: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter..."
        onChange={handleFilterChange}
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Filter;

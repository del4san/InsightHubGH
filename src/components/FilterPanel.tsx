import React, { useState } from 'react';

export interface FilterParams {
  region: string;
  type: string;
  status: string;
}

interface Props {
  onFilter: (filters: FilterParams) => void;
}

const FilterPanel: React.FC<Props> = ({ onFilter }) => {
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const applyFilter = () => {
    onFilter({ region, type, status });
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">All Regions</option>
        <option value="Greater Accra">Greater Accra</option>
        <option value="Ashanti">Ashanti</option>
        {/* Add more regions as needed */}
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>

      <button onClick={applyFilter}>Apply</button>
    </div>
  );
};

export default FilterPanel;
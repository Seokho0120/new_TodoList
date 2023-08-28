import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, idx) => (
          <li key={idx}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

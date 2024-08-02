// src/Dropdown.js
import React from 'react';

function Dropdown({ onChange }) {
  const handleChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    onChange(options);
  };

  return (
    <div>
      <select multiple onChange={handleChange}>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_alphabet">Highest Alphabet</option>
      </select>
    </div>
  );
}

export default Dropdown;

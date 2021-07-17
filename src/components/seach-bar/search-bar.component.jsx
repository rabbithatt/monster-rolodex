import React from 'react';
import './search-bar.styles.css';

export const SearchBar = ({placeholder, handleChange}) => (
    <div>
        <input 
            className="search"
            type="search" 
            placeholder={placeholder} 
            id="" 
            onChange={handleChange}
          />
    </div>
);
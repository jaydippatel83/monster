import React from 'react';
import './Search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div style={{textAlign:"center"}}>
        <h1 className="g-font">Monsters Rolodex</h1>
        <input type="search"
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange} />
    </div>
);
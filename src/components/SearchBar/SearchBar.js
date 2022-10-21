import { useState } from "react";

import "./SearchBarStyles.css";

import React from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [term, setTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" onChange={handleChange} required></input>
      </form>
    </div>
  );
};

export default SearchBar;

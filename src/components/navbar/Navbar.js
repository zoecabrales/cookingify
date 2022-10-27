import React from "react";

import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

//components
import SearchBar from "../../components/SearchBar/SearchBar";

import "./NavbarStyle.scss";

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1> COOKINGIFY 🥘 🥗 🍱</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;

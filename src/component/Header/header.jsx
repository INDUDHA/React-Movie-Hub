import React, { useState } from "react";
import "./header.css";
import image from "../../assets/user_icon.png";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function Header({ onSearch, searchResults }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
    onSearch(input);
  };

  return (
    <div className="header">
      <p className="logo">Movie Hub</p>
      <div>
        <input
          className="search"
          type="text"
          placeholder=" Search.."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <button className="search" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <Link to="/movies">
        <img className="user_icon" src={image} alt="User Icon"></img>
      </Link>
    </div>
  );
}

export default Header;

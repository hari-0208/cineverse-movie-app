import { NavLink, useNavigate } from "react-router-dom";

import ClapperBoard from "/Clapperboard.png";

import {
  MdHome,
  MdStar,
  MdLocalFireDepartment,
  MdMovie,
  MdClose,
  MdMenu,
} from "react-icons/md";

import "../Styles/Header.css";
import { useState } from "react";
export const Header = () => {
  // Menu Toggle State Variables

  const [menuOpen, setMenuOpen] = useState(false);

  // CloseMenu

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();

  // Search

  const handleSearch = (e) => {
    e.preventDefault();

    const queryTerm = e.target.search.value;

    if (!queryTerm) return;

    e.target.reset();

    navigate(`search?q=${encodeURIComponent(queryTerm.trim())}`);
    closeMenu();
  };

  return (
    // NavBar

    <nav className="navbar">
      <div className="nav-container">
        {/* Title & Logo */}

        <NavLink to="/" className="logo">
          <img
            src={ClapperBoard}
            alt="ClapperBoard Icon"
            width="44px"
            height="44px"
          />

          <span className="logo-text">CineVerse</span>
        </NavLink>

        {/* Navlinks Toggle */}

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>

        {/* Nav Links */}

        <div className={`navlink-menu ${menuOpen ? "menu-active" : ""}`}>
          <div className="navlinks">
            <NavLink to="/" onClick={closeMenu}>
              <MdHome /> Home
            </NavLink>

            <NavLink to="/movies/top" onClick={closeMenu}>
              <MdStar /> Top Rated
            </NavLink>

            <NavLink to="/movies/popular" onClick={closeMenu}>
              <MdLocalFireDepartment /> Popular
            </NavLink>

            <NavLink to="/movies/upcoming" onClick={closeMenu}>
              <MdMovie /> Upcoming
            </NavLink>
          </div>

          {/* Search Container */}

          <form onSubmit={handleSearch}>
            <input
              type="search"
              className="form-search"
              placeholder="Search..."
              name="search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

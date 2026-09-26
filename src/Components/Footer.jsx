import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>CineVerse</h3>

        <p>Your guide to great movies.</p>

        <div className="footer-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/movies/top">Top Rated</NavLink>

          <NavLink to="/movies/popular">Popular</NavLink>

          <NavLink to="/movies/upcoming">Upcoming</NavLink>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

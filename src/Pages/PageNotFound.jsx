import NotFound from "/404_error-removebg-preview.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main className="not-found">
      <img src={NotFound} alt="Page Not Found" className="not-found-img" />

      <p className="not-found-text">
        <Link to="/" className="home-btn">
          Go To Home Page
        </Link>
      </p>
    </main>
  );
};

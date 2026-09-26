import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import "../Styles/MovieList.css";
import { Card } from "../Components";

export const MovieList = ({ title, apiPath }) => {
  // Navigation

  const navigate = useNavigate();

  // Document Title

  useEffect(() => {
    document.title = title;
  }, [title]);

  // useFetch

  const { data: movies } = useFetch(apiPath);

  return (
    <>
      {/* Welcome Container */}

      <main className="container">
        {title === "Your Guide to Great Movies" ? (
          <div className="welcome-container">
            <h3>Welcome To CineVerse</h3>

            <p>
              Discover movies from around the world, explore popular and
              top-rated titles, and find your next favorite movie. Browse by
              language, search for your favorite films, and explore everything
              cinema has to offer.
            </p>

            <button onClick={() => navigate("/movies/upcoming")}>
              Explore Now
            </button>
          </div>
        ) : null}

        <h5 className="movie-list-title">{title}</h5>

        <div className="movies-card">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </>
  );
};

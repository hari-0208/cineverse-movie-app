import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStar, MdPeople } from "react-icons/md";
import Backup from "/backup.png";

import "../Styles/MovieDetails.css";
import { convertMinutes } from "../Utils/ConvertMinutes";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  console.log(movie);

  // url dynamic parameter help to read

  const params = useParams();

  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }

    fetchMovies();
  }, [url]);

  useEffect(() => {
    document.title = `${movie.title}`;
  }, [movie.title]);

  return (
    // Movie Details

    <main className="movie-details">
      <div className="details-content">
        {/* Poster */}

        <div className="poster-container">
          <img src={image} alt={movie.title} className="movie-poster" />
        </div>

        {/* Informations */}

        <div className="details-info">
          <h3 className="movie-title">{movie.title}</h3>

          <p className="movie-overview">{movie.overview}</p>

          {/* Genres */}

          {movie.genres ? (
            <p className="movie-genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="movie-genre">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          {/* Rating & Reviews */}

          <p className="movie-rating">
            <span className="star-icon">
              <MdStar /> {movie.vote_average}
            </span>
            |
            <span className="people-icon">
              <MdPeople /> {movie.vote_count} reviews
            </span>
          </p>

          {/* Table */}

          <table className="movie-table-info">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>

              <tr>
                <th>Budget</th>
                <td>
                  {movie.budget > 0
                    ? movie.budget.toLocaleString()
                    : "Not availble"}
                </td>
              </tr>

              <tr>
                <th>Revenue</th>
                <td>
                  {movie.revenue > 0
                    ? movie.budget.toLocaleString()
                    : "Not available"}
                </td>
              </tr>

              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>

          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb-btn"
          >
            view in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};

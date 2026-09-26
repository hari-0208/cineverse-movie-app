import Backup from "/backup.png";
import { Link } from "react-router-dom";
import { MdStar, MdPeople } from "react-icons/md";
import "../Styles/Card.css";
export const Card = ({ movie }) => {
  const { id, poster_path, title, overview, vote_average, vote_count } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : Backup;

  return (
    <>
      {/* Card Container */}

      <div className="card-container">
        {/* Card */}

        <div className="card" title={title}>
          <img src={image} alt={movie.title} className="card-poster" />

          {/* Card Informations */}

          <div className="card-info">
            <h5 className="card-title text-overflow-1">{title}</h5>

            <p className="card-text text-overflow-2">{overview}</p>

            <div className="card-footer">
              <Link to={`/movie/${id}`} className="read-more-btn">
                Read more
              </Link>

              <small className="card-review">
                <span className="rating">
                  <MdStar />{" "}
                  {vote_average > 0 ? vote_average.toFixed(1) : "N/A"}
                </span>
                |
                <span className="review">
                  <MdPeople /> {vote_count > 0 ? vote_count : "No reviews"}
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

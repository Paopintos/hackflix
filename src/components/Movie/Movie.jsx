import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div key={movie.id} className="div-Movies">
      {isLoading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        {movie.poster_path ? (
          <>
            <img
              className={isLoading ? "d-none" : "img-Movies"}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          </>
        ) : (
          <div className="div-no-image">{movie.title}</div>
        )}
      </Link>
    </div>
  );
}

export default Movie;

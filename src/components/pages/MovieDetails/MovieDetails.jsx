import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";
import Navbar from "../../Navbar/Navbar";
import { Container, Spinner } from "react-bootstrap";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieDetails = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=919a5d09f6b0aaa1f1b2b86b920afb86&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
        setIsLoading(!!response.data.poster_path);
      });
  };

  return (
    <div>
      <Navbar />
      {movie.title ? (
        <Container className="container-movie-details">
          {isLoading && (
            <Spinner animation="border" role="status" variant="secondary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {movie.poster_path ? (
            <img
              className={isLoading ? "d-none" : "img-movie-details"}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          ) : (
            <div className="no-image-available">
              <p>No image available.</p>
            </div>
          )}
          <div className="info-movie-details">
            <h1 className="title-movie-details">{movie.title}</h1>
            <p className="date-movie-details">
              Release date: {movie.release_date}
            </p>
            {movie.vote_average <= 4 ? (
              <p className="bad-rating">Vote average: {movie.vote_average}</p>
            ) : movie.vote_average <= 7 ? (
              <p className="regular-rating">
                Vote average: {movie.vote_average}
              </p>
            ) : (
              <p className="good-rating">Vote average: {movie.vote_average}</p>
            )}
            <p className="overview-movie-details">Overview: {movie.overview}</p>
          </div>
        </Container>
      ) : (
        <h3 className="h3-movie-doesnt-exist">This movie doesn't exist.</h3>
      )}
    </div>
  );
}

export default MovieDetails;

import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import tmdbApiConfig from "../../tmdbApiConfig";
import axios from "axios";
import "./MyCarousel.css";
import { Link } from "react-router-dom";

function MyCarousel({ movies }) {
  const [moviesCarousel, setMoviesCarousel] = useState(movies);
  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params["sort_by"] = "vote_average.desc";
      tmdbApiConfig.params["vote_count.gte"] = 1000;
      tmdbApiConfig.params.page = 1;
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMoviesCarousel(data.results);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container-carousel">
      <Carousel id="my-carousel" fade>
        {moviesCarousel.length ? (
          moviesCarousel.map((movie) => (
            <Carousel.Item>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                {movie.backdrop_path ? (
                  <img
                    id="img-carousel"
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <div className="no-image-my-carousel"></div>
                )}
                <Carousel.Caption>
                  <h3 className="fw-bold mb-3 h3-title-carousel">
                    {movie.title}
                  </h3>
                  {movie.vote_average <= 4 ? (
                    <p className="bad-rating text-uppercase p-vote-average-carousel">
                      Vote average: {movie.vote_average}
                    </p>
                  ) : movie.vote_average <= 7 ? (
                    <p className="regular-rating text-uppercase p-vote-average-carousel">
                      Vote average: {movie.vote_average}
                    </p>
                  ) : (
                    <p className="good-rating text-uppercase p-vote-average-carousel">
                      Vote average: {movie.vote_average}
                    </p>
                  )}
                  <p className="p-overview-carousel">{movie.overview}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))
        ) : (
          <p className="not-found-Movies">No se encontraron películas.</p>
        )}
      </Carousel>
    </div>
  );
}

export default MyCarousel;

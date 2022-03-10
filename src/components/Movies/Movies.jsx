import React, { useState } from "react";
import "./Movies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "react-bootstrap";
import Movie from "../Movie/Movie";

function Movies({ movies, getMoreMovies }) {
  return (
    <div>
      <Container className="container-Movies">
        <InfiniteScroll
          dataLength={movies.length}
          next={getMoreMovies}
          hasMore={true}
          className="infinite-scroll-movies"
        >
          {movies.length ? (
            movies.map((movie) => <Movie movie={movie} />)
          ) : (
            <p className="not-found-Movies">No movies found.</p>
          )}
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export default Movies;

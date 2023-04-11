import React from 'react';
import { Link } from './SharedLayout.styled';
import { MovieLi } from './MoviesListElement.styled';

const MoviesListElement = ({ movieId, movieTitle, to, from }) => {
  return (
    <MovieLi key={movieId}>
      <Link to={`${to}`} state={{ from: from }}>
        &#10139; {movieTitle}
      </Link>
    </MovieLi>
  );
};

export default MoviesListElement;

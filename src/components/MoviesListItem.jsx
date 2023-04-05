import React from 'react';

const MoviesListItem = ({ movieId, movieTitle }) => {
  return <li key={movieId}>{movieTitle}</li>;
};

export default MoviesListItem;

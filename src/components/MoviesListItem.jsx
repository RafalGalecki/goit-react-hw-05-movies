import React from 'react';
import { Link } from './SharedLayout.styled';

const MoviesListItem = ({ movieId, movieTitle, to, from }) => {
  return (
    <li key={movieId}>
      <Link to={`${to}`} state={{from: from}}>{movieTitle}</Link>
    </li>
  );
};

export default MoviesListItem;

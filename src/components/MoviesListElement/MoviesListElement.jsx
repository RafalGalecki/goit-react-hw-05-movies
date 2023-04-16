import React from 'react';
import { Link } from '../SharedLayout/SharedLayout.styled';
import { MovieLi } from './MoviesListElement.styled';
import css from './MoviesListElement.module.css'

const MoviesListElement = ({ movieId, movieTitle, movieBackdrop, to, from }) => {
  return (
    <MovieLi key={movieId}>
      <Link className={css.thumb} to={`${to}`} state={{ from: from }}>
        <img className={css.backdrop} src={movieBackdrop} alt={movieTitle} />
        <p className={css.label} >{movieTitle}</p>
      </Link>
    </MovieLi>
  );
};

export default MoviesListElement;

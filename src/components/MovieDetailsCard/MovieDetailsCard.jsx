import React from 'react';
import css from './MovieDetailsCard.module.css';

const MovieDetailsCard = ({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  voteCount,
  tagline,
  overview,
  genres,
  homepage,
}) => {
  return (
    <div className={[css.movie__card]}>
      <div className={[css.movie__poster]}>
        {!posterPath.includes(null) ? (
          <img src={posterPath} alt={`${title}'s poster`} />
        ) : (
          <p>No poster yet.</p>
        )}
      </div>
      <div className={[css.movie__desc]}>
        <h2 className={[css.movie__title]}>
          {title} <span className={[css.movie__score]}>({releaseDate})</span>
        </h2>
        <h4 className={[css.movie__score]}>
          User score: {Math.round(voteAverage * 10)}% / Votes: {voteCount}
        </h4>
        <div className={[css.movie__paragraph]}>
          <h4>Overview</h4>
          {tagline && <p>&#10077; {tagline} &#10078;</p>}
          <p>{overview}</p>
        </div>
        <div className={[css.movie__paragraph]}>
          <h4>Genres</h4>
          <ul className={[css.movie__genres]}>
            {genres.map(element => (
              <li key={element.id}>{element.name}</li>
            ))}
          </ul>
        </div>
        {homepage && (
          <div className={[css.movie__paragraph]}>
            <h4>Homepage</h4>

            <a
              className={[css.movie__homepage]}
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              &#10139; {homepage}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsCard;

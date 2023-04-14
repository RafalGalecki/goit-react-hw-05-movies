import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Link } from '../../components/SharedLayout.styled';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getDetails = async () => {
      const response = await getMovieDetails(id);
      if (response !== null) {
        setMovieDetails(response);
      } else {
        setMovieDetails('');
      }
    };
    getDetails();
  }, [id]);

  return (
    <main>
      <Link className={[css.movie__link]} to={backLinkHref}>
        &#10094; Go back
      </Link>
      {movieDetails && (
        <>
          <div className={[css.movie__card]}>
            <div className={[css.movie__poster]}>
              {!movieDetails.posterPath.includes(null) ? (
                <img
                  src={movieDetails.posterPath}
                  alt={`${movieDetails.title}'s poster`}
                />
              ) : (
                <p>No poster yet.</p>
              )}
            </div>
            <div className={[css.movie__desc]}>
              <h2 className={[css.movie__title]}>
                {movieDetails.title}{' '}
                <span className={[css.movie__score]}>
                  ({movieDetails.releaseDate})
                </span>
              </h2>
              <h4 className={[css.movie__score]}>
                User score: {Math.round(movieDetails.voteAverage * 10)}% /
                Votes: {movieDetails.voteCount}
              </h4>
              <div className={[css.movie__paragraph]}>
                <h4>Overview</h4>
                <p>{movieDetails.overview}</p>
              </div>
              <div className={[css.movie__paragraph]}>
                <h4>Genres</h4>
                <ul className={[css.movie__genres]}>
                  {movieDetails.genres.map(element => (
                    <li key={element.id}>{element.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={[css.movie__additions]}>
            <h5>Additional information</h5>
            <ul className={[css.additions__list]}>
              <li>
                <Link
                  className={[css.additions__item]}
                  to="cast"
                  state={{ from: location.state.from }}
                >
                  &#10139; Cast
                </Link>
              </li>
              <li>
                <Link
                  className={[css.additions__item]}
                  to="reviews"
                  state={{ from: location.state.from }}
                >
                  &#10139; Reviews
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

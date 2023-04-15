import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Link } from '../../components/SharedLayout/SharedLayout.styled';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

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
          <MovieDetailsCard
            posterPath={movieDetails.posterPath}
            title={movieDetails.title}
            releaseDate={movieDetails.releaseDate}
            voteAverage={movieDetails.voteAverage}
            voteCount={movieDetails.voteCount}
            tagline={movieDetails.tagline}
            overview={movieDetails.overview}
            genres={movieDetails.genres}
            homepage={movieDetails.homepage}
          />
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
              <li>
                <Link
                  className={[css.additions__item]}
                  to="crew"
                  state={{ from: location.state.from }}
                >
                  &#10139; Crew
                </Link>
              </li>
              <li>
                <Link
                  className={[css.additions__item]}
                  to="similar"
                  state={{ from: location.state.from }}
                >
                  &#10139; Similar movies &#128521;
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

import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Link } from '../../components/SharedLayout.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      const response = await getMovieDetails(id);
      if (response !== null) {
        setMovieDetails(response);
        console.log('Details', response);
      } else {
        setMovieDetails('');
      }
    };
    getDetails();
  }, [id]);

  return (
    <main>
      <Link to={location.state ? location.state.from : '/'}>&lt; Go back</Link>
      {movieDetails && (
        <>
          <div>
            <img
              src={movieDetails.posterPath}
              alt={`${movieDetails.title}'s poster`}
            />
            <div>
              <h3>
                {movieDetails.title} ({movieDetails.releaseDate})
              </h3>
              <p>User score: {Math.round(movieDetails.voteAverage * 10)}%</p>
              <h4>Overview</h4>
              <p>{movieDetails.overview}</p>
              <h4>Genres</h4>
              <ul>
                {movieDetails.genres.map(element => (
                  <li key={element.id}>{element.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

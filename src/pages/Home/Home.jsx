import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList';
import MoviesListElement from 'components/MoviesListElement';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const locaction = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTrendingMovies();
      console.log('response', response);
      if (response !== null) {
        setMovies(response);
      } else {
        setMovies([]);
      }
    };
    fetchMovies();
  }, []);
  return (
    <main>
      <MoviesList title="Trending today">
        {movies &&
          movies.map(({ movieId, movieTitle }) => (
            <MoviesListElement
              key={movieId}
              movieTitle={movieTitle}
              to={'movies/' + movieId}
              from={locaction}
              movieId={movieId}
            />
          ))}
      </MoviesList>
    </main>
  );
};

export default Home;

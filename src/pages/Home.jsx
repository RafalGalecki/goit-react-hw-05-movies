import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList';
import MoviesListItem from 'components/MoviesListItem';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
            <MoviesListItem key={movieId} movieTitle={movieTitle} />
          ))}
      </MoviesList>
    </main>
  );
};

export default Home;

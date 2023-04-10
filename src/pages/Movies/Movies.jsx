import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import MoviesListItem from 'components/MoviesListItem';
import { getQueryMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('query'));
  const location = useLocation();
  const [isMovie, setIsMovie] = useState(false);

  const searcher = filter => {
    if (filter) {
      setFilter(filter);
    }
  };

  useEffect(() => {
    setSearchParams({ query: filter });
    const getMovies = async () => {
      const response = await getQueryMovies(filter);
      console.log('RES', response);
      if (response !== null) {
        setMovies(response);
        setIsMovie(true);
      }
      if (response.length === 0) {
        setIsMovie(false);
        console.log('ZERO');
      }
    };
    getMovies();
  }, [filter, setSearchParams]);

  return (
    <main>
      <Searchbar filter={filter} searcher={filter => searcher(filter)} />
      {isMovie === null ?? <p>No</p>}
      {isMovie ? (
        <MoviesList title="Trending today">
          {movies &&
            movies.map(({ movieId, movieTitle }) => (
              <MoviesListItem
                key={movieId}
                movieTitle={movieTitle}
                to={movieId.toString()}
                from={location}
                movieId={movieId}
              />
            ))}
        </MoviesList>
      ) : (
        <div style={{ marginTop: '100px' }}>
          <p>Please type the movie's title to search </p>
        </div>
      )}
    </main>
  );
};

export default Movies;

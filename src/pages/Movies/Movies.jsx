import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesListElement from 'components/MoviesListElement/MoviesListElement';
import { getQueryMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('query'));
  const location = useLocation();
  const [isMovie, setIsMovie] = useState(null);

  const searcher = filter => {
    if (filter) {
      setFilter(filter);
    }
  };

  useEffect(() => {
    if (filter) {
      setSearchParams({ query: filter });
      const getMovies = async () => {
        const response = await getQueryMovies(filter);
        if (response !== null) {
          setMovies(response);
          setIsMovie(true);
        }
        if (response.length === 0) {
          setIsMovie(false);
        }
      };
      getMovies();
    }
  }, [filter, setSearchParams]);

  return (
    <main>
      <Searchbar filter={filter} searcher={filter => searcher(filter)} />

      {isMovie === null ? (
        <div>
          <h4>Search The Movie DataBase for movies</h4>
        </div>
      ) : isMovie ? (
        <MoviesList>
          {movies &&
            movies.map(({ movieId, movieTitle, movieBackdrop }) => (
              <MoviesListElement
                key={movieId}
                movieTitle={movieTitle}
                movieBackdrop={movieBackdrop}
                to={movieId.toString()}
                from={location}
                movieId={movieId}
              />
            ))}
        </MoviesList>
      ) : (
        <div>
          <p>No results</p>
        </div>
      )}
    </main>
  );
};

export default Movies;

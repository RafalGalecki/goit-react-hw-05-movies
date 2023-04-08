import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import MoviesListItem from 'components/MoviesListItem';
import { getQueryMovies } from 'services/api';

const Movies = ({ query }) => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('query'));
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
      if (response !== null) {
        setMovies(response);
        setIsMovie(true);
      } else {
        setIsMovie(false);
      }
    };
    getMovies();
  }, [filter, setSearchParams]);

  return (
    <main>
      <Searchbar filter={filter} searcher={filter => searcher(filter)} />
      {isMovie ? (
        <MoviesList title="Search The Movie DataBase for any movie title">
          {movies &&
            movies.map(({ movieId, movieTitle }) => (
              <MoviesListItem key={movieId} movieTitle={movieTitle} />
            ))}
        </MoviesList>
      ) : (
        <div>
          <p>There is no movie in TMDB of the title you entered</p>
        </div>
      )}
    </main>
  );
};

export default Movies;

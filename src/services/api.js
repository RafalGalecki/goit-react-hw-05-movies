import axios from 'axios';

export const API_KEY = '7e626872ba2c457d969115031d94d6fb';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const PAGE = 1;

// This is tha main fetch fuction
const fetchTMDB = async (urlPath, myParams) => {
  return axios
    .get(BASE_URL + urlPath, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        ...myParams,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log('error', error);
    });
};

const getTrendingMovies = async () => {
  const response = await fetchTMDB('/trending/movie/day');
  if (response === null) {
    return null;
  }
  let movies = [];
  handleMoviesData(response.data.results, movies);
  return movies;
};

const handleMoviesData = (response, movies) => {
  response.forEach(movie => {
    return movies.push({ movieId: movie.id, movieTitle: movie.title });
  });
};

const getQueryMovies = async query => {
  const myParams = {
    query: query,
    page: 1,
  };
  const response = await fetchTMDB('/search/movie', myParams);
  if (response === null) {
    return null;
  }
  let movies = [];
  handleMoviesData(response.data.results, movies);
  return movies;
};

const getMovieDetails = async id => {
  const response = await fetchTMDB(`/movie/${id}`);
  if (response === null) {
    return null;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } =
    response.data;
  const movieDetails = {
    posterPath: 'https://image.tmdb.org/t/p/w300' + poster_path,
    title,
    releaseDate: `${new Date(release_date).getFullYear()}`,
    voteAverage: vote_average,
    overview,
    genres,
  };
  return movieDetails;
};

export { getTrendingMovies, getQueryMovies, getMovieDetails };
//export default getTrendingMovies;

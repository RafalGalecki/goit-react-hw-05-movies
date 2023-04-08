import axios from 'axios';

export const API_KEY = '7e626872ba2c457d969115031d94d6fb';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const PAGE = 1;


// This is tha main fetch fuction
const fetchTMDB = (specifiedUrl, myParams) => {
  return axios.get(BASE_URL + specifiedUrl, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
      ...myParams,
    },
  }).then(response => {
    return response;
  }).catch(error => {
    console.log('error', error)
  })
}

const getTrendingMovies = async () => {
  const specifiedUrl = '/trending/movie/day';
  const myParams = {};
  const response = await fetchTMDB(specifiedUrl, myParams);
  if (response === null) {
    return null;
  }
  let movies = [];
  getMoviesData(response.data.results, movies);
  return movies;
}

const getMoviesData = (response, movies) => {
  response.forEach(movie => {
    return movies.push({ movieId: movie.id, movieTitle: movie.title });
  })
}

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
  getMoviesData(response.data.results, movies);
  return movies;
};

export {getTrendingMovies, getQueryMovies}
//export default getTrendingMovies;
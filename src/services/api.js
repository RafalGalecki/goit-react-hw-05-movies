import axios from 'axios';

export const API_KEY = '7e626872ba2c457d969115031d94d6fb';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const PAGE = 1;



//fetch for getting movies based on input for searching
export const getSearchedMovies = async (searchInput, PAGE) => {
  const urlForSearching = ''.concat(
    BASE_URL,
    'search/movie?api_key=',
    API_KEY,
    '&query=',
    searchInput,
    `&page=${PAGE}`
  );

  const response = await axios
    .get(urlForSearching)
    .then(function (response) {
      // handle success
      //refreshRendering();

      if (response.data.results.length !== 0) {
        //warning.textContent = '';
        return response;

      } else {
        // if no results found - show warning
        //warning.textContent = 'Search result not successful. Enter the correct movie name and try again.';
       
      }

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // Notiflix.Notify.error(
      //   'We are sorry, but getting data is impossible in that moment'
      // );
    });
  console.log('Input Response', response);
  return response;
};

//fetch for getting movies for initial website based on daily trending
export const getInitialMovies = async () => {
  const urlForInitialMovies = ''.concat(
    BASE_URL,
    'trending/movie/day?api_key=',
    API_KEY,
    `&page=${PAGE}`
  );

  const response = await axios
    .get(urlForInitialMovies)
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      alert(
        'We are sorry, but getting data is impossible in that moment'
      );
    });

  return response;
};

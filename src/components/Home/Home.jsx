import { useState, useEffect } from 'react';
//import { useLocation } from "react-router-dom";
import getTrendingMovies from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  //const location = useLocation();

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
    <>
      <h2>Trending today</h2>
      <ul>
        {movies && movies.map(({movieId, movieTitle}) => <li id={movieId}>{movieTitle}</li>)}
      </ul>
    </>
  );
};
export default Home;

import { useState, useEffect } from 'react';

const Movies = ({ query }) => {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    query(filter);
    setFilter('');
  };
  const handleChange = event => {};
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="search"
        name="query"
        value={filter}
        onChange={event => handleChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;

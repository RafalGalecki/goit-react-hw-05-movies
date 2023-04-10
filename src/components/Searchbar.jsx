import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ searcher }) => {
  const [filter, setFilter] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    searcher(filter);
    setFilter('');
  };
  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="search"
        name="query"
        value={filter}
        placeholder="Enter a movie title"
        onChange={event => handleChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  searcher: PropTypes.func.isRequired,
};

export default Searchbar;

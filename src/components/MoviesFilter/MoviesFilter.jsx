import React from 'react';
import css from './MoviesFilter.module.css';

const MoviesFilter = () => {
    let genre;
    let year;
  const getDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(50), (v, i) => (
      <option key={i} value={year + i}>
        {year + i}
      </option>
    ));
  };
  return (
    <form className={css.filterContainer}>
      <label name="genre" value={genre}>
        Choose genre
        <select></select>
      </label>
      <label>
        Choose year
        <select name="year" value={year}>
          {getDropList}
        </select>
      </label>
    </form>
  );
};

export default MoviesFilter;

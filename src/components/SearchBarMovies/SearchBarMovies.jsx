import { useState } from 'react';
import './SearchBarMovies.css';

const SearchBarMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handelChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Enter a word to search for a picture');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handelSubmit} className="form-search">
      <input
        className="input"
        value={query}
        onChange={handelChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBarMovies;

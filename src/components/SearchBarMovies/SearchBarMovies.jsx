import { useState } from 'react';
import './SearchBarMovies.css';
import { toast } from 'react-toastify';

const SearchBarMovies = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handelChange = ({ target }) => {
    setQuery(target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.info('Enter a word to search for a picture');
    }

    setSearchParams({ query: query });
    setQuery('');
  };

  return (
    <form onSubmit={handelSubmit} className="form-search">
      <input
        className="input"
        onChange={handelChange}
        value={query}
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

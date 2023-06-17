import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { BTNSearch, FormSearch, InputSearch } from './SearchBarMovies.styled';

export const SearchBarMovies = ({ setSearchParams, setCurrentPage }) => {
  const [query, setQuery] = useState('');

  const handelChange = ({ target }) => {
    setQuery(target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.info('Enter a word to search for a picture');
    }

    setSearchParams({ query });
    setCurrentPage(1);
    setQuery('');
  };

  return (
    <FormSearch onSubmit={handelSubmit}>
      <InputSearch
        onChange={handelChange}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <BTNSearch type="submit">Search</BTNSearch>
    </FormSearch>
  );
};

SearchBarMovies.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '86f3ec64abfb51abe13181a8bb1929f0';

async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `3/trending/movie/day?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSearchMovies(search) {
  try {
    const response = await axios.get(
      `3/search/movie?api_key=${API_KEY}&${search}&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchDetailsMovies(id) {
  try {
    const response = await axios.get(`3/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const api = {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchDetailsMovies,
};

export default api;

import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYzZWM2NGFiZmI1MWFiZTEzMTgxYThiYjE5MjlmMCIsInN1YiI6IjY0MzAzYmY5NmRlYTNhMDBiNTRlOTNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3wOLdxcoA2DAJirmMuSvEYNDya1YwIdBvChC6VOo9Vs';

async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`3/trending/all/day?page=1`, {
      headers: {
        Authorization: `${API_Authorization}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSearchMovies(search) {
  try {
    const response = await axios.get(
      `3/search/movie?&${search}&include_adult=false&&page=1`,
      {
        headers: {
          Authorization: `${API_Authorization}`,
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return toast.error('An error occurred on the server. Try again later');
  }
}

async function fetchDetailsMovies(id) {
  try {
    const response = await axios.get(`3/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `${API_Authorization}`,
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return toast.error('Unfortunately, there is no information about the film');
  }
}

async function fetchCastMovies(id) {
  try {
    const response = await axios.get(`3/movie/${id}/credits?`, {
      headers: {
        Authorization: `${API_Authorization}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchReviewsMovies(id) {
  try {
    const response = await axios.get(`3/movie/${id}/reviews?&page=1`, {
      headers: {
        Authorization: `${API_Authorization}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const api = {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchDetailsMovies,
  fetchCastMovies,
  fetchReviewsMovies,
};

export default api;

import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYzZWM2NGFiZmI1MWFiZTEzMTgxYThiYjE5MjlmMCIsInN1YiI6IjY0MzAzYmY5NmRlYTNhMDBiNTRlOTNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3wOLdxcoA2DAJirmMuSvEYNDya1YwIdBvChC6VOo9Vs';

export async function fetchTrendingMovies(page) {
  try {
    const response = await axios.get(`3/trending/all/day?page=${page}`, {
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

export async function fetchSearchMovies(search, page) {
  try {
    const response = await axios.get(
      `3/search/movie?&${search}&include_adult=false&&page=${page}`,
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

export async function fetchDetailsMovies(id) {
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
  }
}

export async function fetchCastMovies(id) {
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

export async function fetchReviewsMovies(id) {
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

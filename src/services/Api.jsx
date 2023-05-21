import axios from 'axios';

const API_KEY = "34e68a416eb051ec4adf34df5a0038fd";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchAllMovies = async () =>
{
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

    return response.data;
};
export const fetchMoviesSearch = async searchText =>
{
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`);

    return response.data;
};
export const fetchMoviesId = async movieId =>
{
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return response.data;
};
export const fetchMoviesCasts = async (movieId) =>
{
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`);

    return response.data;
};
export const fetchMoviesReviews = async (movieId) =>
{
    const response = await axios.get(`movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

    return response.data;
};
// https://www.themoviedb.org/
// Documentation: https:/developer.themoviedb.org/

// username: mikaelasturk
// password: MovieApp
// apiKey: a58868b333ba608ab720ea1d3cd907f2

const API_KEY = 'a58868b333ba608ab720ea1d3cd907f2';
let endpoint = '';
let page = '';
const API_URL = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&language=en-US&${page}`;



export const fetchMovies = async () => {

  endpoint = "popular";
  page = "page=1";

  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log('Fetched movies data:', data);
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {

  endpoint = movieId;

  movieId = ""; // to be replaced with actual movie ID when calling the function

  try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    return null;
  }
};

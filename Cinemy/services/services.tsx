// -------- This file contains all the functions of the services the app will provide -------- //
// ------------------------------------------------------------------------------------------- //

import axios from 'axios'; // A service to grab data from an API

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=c62bc8c74953d6b00fe3df6282034a60';

// ============== Get Popular Movies ============== //
// As the getPopularMovies() function need to wait for the response, this must be asynchronous method
// `export` is used beacuse we want to use this function in another file
export const getPopularMovies = async () => {
  // `await` tells to wait until response is ready
  const response = await axios.get(
    `${apiUrl}/movie/popular?${apiKey}`,
  ); // Storing the response of GET request of the API call
  //console.log(JSON.stringify(response.data, null, 2)); // Stylizing the response(filtering everything from response except data part)

  return response.data.results; // Return the list of popular movies
};

// ============== Get Upcoming Movies ============== //
export const getUpcomingMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/movie/upcoming?${apiKey}`,
  );

  return response.data.results; // Return the list of upcoming movies
};

// ============== Get Popular TV shows ============== //
export const getPopularTVShows = async () => {
  const response = await axios.get(
    `${apiUrl}/tv/popular?${apiKey}`,
  );

  return response.data.results; // Return the list of popular TV shows
};

// ============== Get Family Movies ============== //
export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );

  return response.data.results;
};

// ============== Get Documnetery Movies ============== //
export const getDocumentaryMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );

  return response.data.results;
};

// ============== Get Details of a Movie ============== //
export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${apiUrl}/movie/${id}?${apiKey}`,
  );

  return response.data;
};

// ============== Search Movie or TV by Keyword ============== //
export const getSearchedMovieTV = async (query, type) => {
  const response = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );

  return response.data;
};
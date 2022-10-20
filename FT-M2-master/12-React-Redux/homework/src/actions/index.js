export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES"; // Traer todas las peliculas

export function getMovieDetail(id) {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=2b89be1f&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAILS, payload: json });
      });
  };
}

export function addMovieFavorite(payload) {
  //Agregar película en favorito.
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
  return { type: REMOVE_MOVIE_FAVORITE, payload};
}

export function getMovies(title) {
  //Llamado a la API trayendo las películas.
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=2b89be1f&s=${title}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

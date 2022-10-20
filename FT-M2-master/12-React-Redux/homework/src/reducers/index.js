import {
  GET_MOVIE_DETAILS,
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from "../actions/index.js";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload), //State = Array vacío y se agrega el nuevo de action.payload.
    };
  } else if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search, //Busqueda de películas.
    };
  } else if (action.type === GET_MOVIE_DETAILS) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  } else if (action.type === REMOVE_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(
        (m) => m.id !== action.payload
      ),
    };
  }
  return { ...state };
}

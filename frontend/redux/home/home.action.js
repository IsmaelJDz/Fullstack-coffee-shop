import { HomeActionTypes } from "./movie.types";

export const setCurrentMovies = coffees => ({
  type: HomeActionTypes.SET_CURRENT_COFFEES,
  payload: coffees
});

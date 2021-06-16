import { HomeActionTypes } from "./home.types";

const INITIAL_STATE = {
  currentCoffees: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SET_CURRENT_COFFEES:
      return {
        ...state,
        currentCoffees: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

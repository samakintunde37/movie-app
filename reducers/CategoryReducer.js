import * as categoryTypes from "../actions/CategoriesActionTypes";

const INITIAL_STATE = {
  active: "Home",
  movies: [],
  tv: []
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${categoryTypes.GET_MOVIE_FROM_CATEGORY}_FULFILLED`:
      let { movies } = state;
      movies = action.payload;
      return { ...state, movies };

    case `${categoryTypes.GET_TV_FROM_CATEGORY}_FULFILLED`:
      let { tv } = state;
      tv = action.payload;
      return { ...state, tv };

    case "SET_ACTIVE_CATEGORY":
      let { active } = state;
      active = action.payload;
      return { ...state, active };

    case "RESET_CATEGORY":
      return { ...INITIAL_STATE };

    default:
      return state;
      break;
  }
};

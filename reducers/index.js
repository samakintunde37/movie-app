import { combineReducers } from "redux";
import { moviesReducer } from "./Reducer";
import { tvReducer } from "./TvReducer";
import { categoryReducer } from "./CategoryReducer";
import { searchReducer } from "./SearchReducer";

export default combineReducers({
  tv: tvReducer,
  movies: moviesReducer,
  search: searchReducer,
  categoryMedia: categoryReducer,
});

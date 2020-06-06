import axios from "axios";
import * as searchTypes from "./SearchTypes";

export function searchIndex(query) {
  return dispatch => {
    dispatch({
      type: searchTypes.GET_SEARCHED_INDEX,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1&query=${query}&include_adult=false`
          )
          .then(response => resolve(response.data.results))
          .catch(error => console.log(error));
      }),
    });
  };
}

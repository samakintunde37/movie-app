import axios from "axios";

export const getCategoriesList = payload => {
  return dispatch => {
    dispatch({
      type: payload.type,
      payload: new Promise(resolve => {
        axios
          .get(payload.url)
          .then(response => resolve(response.data.genres))
          .catch(error => console.log(error));
      })
    });
  };
};

export const getCategoriesMedia = payload => {
  return dispatch => {
    dispatch({
      type: payload.type,
      payload: new Promise(resolve => {
        axios
          .get(payload.url)
          .then(res => resolve(res.data.results))
          .catch(err => console.log(err));
      })
    });
  };
};

export const setActiveCategory = payload => {
  return dispatch => {
    dispatch({
      type: "SET_ACTIVE_CATEGORY",
      payload: payload.genre.name
    });
  };
};

export const resetCategory = payload => {
  return dispatch => {
    dispatch({
      type: "RESET_CATEGORY"
    });
  };
};

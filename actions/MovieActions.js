import axios from "axios";
import * as movieTypes from "./MovieActionTypes";

export function getMovieInfo(payload) {
  return dispatch => {
    dispatch({
      type: movieTypes.GET_MOVIE_INFO,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${payload}?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US`
          )
          .then(response => resolve(response.data))
          .catch(error => console.log(error));
      }),
    });
  };
}
export function getVideo(movieId) {
  return dispatch => {
    dispatch({
      type: movieTypes.GET_VIDEO,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US`
          )
          .then(response => resolve(response.data.results))
          .catch(error => console.log(error));
      }),
    });
  };
}
export function showCategoriesMedia(payload) {
  return dispatch => {
    dispatch({
      type: movieTypes.SHOW_CATEGORIES_INFO,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${payload}?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US`
          )
          .then(response => resolve(response.data))
          .catch(error => console.log(error));
      }),
    });
  };
}
export function getSimilarMovie(payload) {
  return dispatch => {
    dispatch({
      type: movieTypes.GET_SIMILAR_INFO,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${payload}/similar?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
          )
          .then(response => resolve(response.data.results))
          .catch(error => console.log(error));
      }),
    });
  };
}
export function getCredits(payload) {
  return dispatch => {
    dispatch({
      type: movieTypes.GET_CREDITS,
      payload: new Promise(resolve => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${payload}/credits?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
          )
          .then(response => resolve(response.data))
          .catch(error => console.log(error));
      }),
    });
  };
}

export function getMediaSection(payload) {
  return dispatch => {
    dispatch({
      type: payload.type,
      payload: new Promise(resolve => {
        axios
          .get(payload.url)
          .then(response => resolve(response.data.results))
          .catch(error => console.log(error));
      }),
    });
  };
}

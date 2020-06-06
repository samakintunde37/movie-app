import * as movieTypes from "../actions/MovieActionTypes";

const INITIAL_STATE = {
  isReady: false,
  nowPlaying: {},
  movies: {
    topRated: [],
    upcoming: [],
    latest: [],
    topPicks: [],
    recentlyWatched: [],
  },
  movieInfo: {},
  credits: {},
  similarMovies: [],
  categories: [],
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_MOVIE_INFO_PENDING":
      return { ...state, movieInfo: {} };

    case "GET_MOVIE_INFO_FULFILLED":
      return { ...state, movieInfo: action.payload };
    case "GET_CREDITS_FULFILLED":
      return { ...state, credits: action.payload };

    case "GET_SIMILAR_INFO_FULFILLED":
      return { ...state, similarMovies: action.payload };

    case "GET_VIDEO_PENDING":
      return { ...state, nowPlaying: {} };
    case "GET_VIDEO_FULFILLED":
      return { ...state, nowPlaying: action.payload[0] };

    case "GET_UPCOMING_MOVIES_FULFILLED":
      let { upcoming } = state.movies;
      upcoming = action.payload;
      let upcomingMovies = Object.assign({}, state.movies, { upcoming });

      return { ...state, movies: upcomingMovies };
    case "GET_TOP_RATED_MOVIES_FULFILLED":
      let { topRated } = state.movies;
      topRated = action.payload;

      let topRatedMovies = Object.assign({}, state.movies, { topRated });

      return { ...state, movies: topRatedMovies };
    case "GET_LATEST_MOVIES_FULFILLED":
      let { latest } = state.movies;
      latest = action.payload;
      let latestMovies = Object.assign({}, state.movies, { latest });

      return { ...state, movies: latestMovies };
    case "GET_TOP_PICKS_MOVIES_FULFILLED":
      let { topPicks } = state.movies;
      topPicks = action.payload;
      let topPicksMovies = Object.assign({}, state.movies, { topPicks });

      return { ...state, movies: topPicksMovies };
    case "GET_RECENT_MOVIES_FULFILLED":
      let { recentlyWatched } = state.movies;
      recentlyWatched = action.payload;
      let recentMovies = Object.assign({}, state.movies, { recentlyWatched });

      return { ...state, movies: recentMovies };
    case "GET_MOVIES_CATEGORIES_FULFILLED":
      let { categories } = state.movies;
      categories = action.payload;
      let moviesCategories = Object.assign({}, state.movies, { categories });
      return { ...state, movies: moviesCategories };

    default:
      return state;
  }
};

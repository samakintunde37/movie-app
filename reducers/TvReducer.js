import * as tvTypes from "../actions/TvActionTypes";
const INITIAL_STATE = {
  tv: {
    upcoming: [],
    topRated: [],
    latest: [],
    topPicks: [],
    recentlyWatched: [],
    categories: []
  }
};

export const tvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tvTypes.GET_TV_INFO:
      return { ...state };
    case "GET_UPCOMING_TV_FULFILLED":
      let { upcoming } = state.tv;
      upcoming = action.payload;
      let upcomingTv = Object.assign({}, state.tv, { upcoming });
      return { ...state, tv: upcomingTv };
    case "GET_TOP_RATED_TV_FULFILLED":
      let { topRated } = state.tv;
      topRated = action.payload;
      let topRatedTv = Object.assign({}, state.tv, { topRated });

      return { ...state, tv: topRatedTv };
    case "GET_LATEST_TV_FULFILLED":
      let { latest } = state.tv;
      latest = action.payload;
      let latestTv = Object.assign({}, state.tv, { latest });

      return { ...state, tv: latestTv };
    case "GET_TOP_PICKS_TV_FULFILLED":
      let { topPicks } = state.tv;
      topPicks = action.payload;
      let topPicksTv = Object.assign({}, state.tv, { topPicks });

      return { ...state, tv: topPicksTv };
    case "GET_RECENT_TV_FULFILLED":
      let { recentlyWatched } = state.tv;
      recentlyWatched = action.payload;
      let recentTv = Object.assign({}, state.tv, { recentlyWatched });
      return { ...state };
    case "GET_TV_CATEGORIES":
      let { categories } = state.tv;
      categories = action.payload;
      let tvCategories = Object.assign({}, state.tv, { categories });
    default:
      return state;
  }
};

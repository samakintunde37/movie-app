import * as movieTypes from "../actions/MovieActionTypes";
import * as tvTypes from "../actions/TvActionTypes";
import * as categoriesTypes from "../actions/CategoriesActionTypes";

export const upcoming = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? movieTypes.GET_UPCOMING_MOVIES
        : tvTypes.GET_UPCOMING_TV,
    url: `https://api.themoviedb.org/3/${mediaType.type}/${
      mediaType.genre
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
  };
};
export const topRated = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? movieTypes.GET_TOP_RATED_MOVIES
        : tvTypes.GET_TOP_RATED_TV,
    url: `https://api.themoviedb.org/3/${mediaType.type}/${
      mediaType.genre
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
  };
};
export const latest = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? movieTypes.GET_LATEST_MOVIES
        : tvTypes.GET_LATEST_TV,
    url: `https://api.themoviedb.org/3/${mediaType.type}/${
      mediaType.genre
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
  };
};
export const topPicks = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? movieTypes.GET_TOP_PICKS_MOVIES
        : tvTypes.GET_TOP_PICKS_TV,
    url: `https://api.themoviedb.org/3/${mediaType.type}/${
      mediaType.genre
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
  };
};
export const recent = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? movieTypes.GET_RECENT_MOVIES
        : tvTypes.GET_RECENT_TV,
    url: `https://api.themoviedb.org/3/${mediaType.type}/${
      mediaType.genre
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US&page=1`
  };
};
export const categories = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? categoriesTypes.GET_MOVIES_CATEGORIES
        : categoriesTypes.GET_TV_CATEGORIES,
    url: `https://api.themoviedb.org/3/genre/${
      mediaType.type
    }/list?api_key=a1f8c112b29126da921fdb76dadd15ac&language=en-US`
  };
};
export const categoryMovieList = mediaType => {
  return {
    type:
      mediaType.type === "movie"
        ? categoriesTypes.GET_MOVIE_FROM_CATEGORY
        : categoriesTypes.GET_TV_FROM_CATEGORY,
    url: `https://api.themoviedb.org/3/discover/${
      mediaType.type
    }?api_key=a1f8c112b29126da921fdb76dadd15ac&with_genres=${
      mediaType.genre
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  };
};

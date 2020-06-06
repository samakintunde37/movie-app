import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getCategoriesList,
  getCategoriesMedia
} from "../actions/CategoriesActions";
import { getMediaSection } from "../actions/MovieActions";
import {
  categories,
  categoryMovieList,
  latest,
  recent,
  topPicks,
  topRated,
  upcoming
} from "../services/api";
import Header from "./../containers/Header";
import ViewTab from "./../containers/SegmentedControl";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: {
        id: "",
        name: "Movie App"
      }
    };
  }

  componentDidMount() {
    // Movie Endpoints
    this.props.getMediaSection(latest({ type: "movie", genre: "popular" }));
    this.props.getMediaSection(recent({ type: "movie", genre: "top_rated" }));
    this.props.getMediaSection(topRated({ type: "movie", genre: "top_rated" }));
    this.props.getMediaSection(
      topPicks({ type: "movie", genre: "now_playing" })
    );
    this.props.getMediaSection(upcoming({ type: "movie", genre: "upcoming" }));

    // Tv Endpoints
    this.props.getMediaSection(latest({ type: "tv", genre: "popular" }));
    this.props.getMediaSection(recent({ type: "tv", genre: "latest" }));
    this.props.getMediaSection(topRated({ type: "tv", genre: "top_rated" }));
    this.props.getMediaSection(topPicks({ type: "tv", genre: "airing_today" }));
    this.props.getMediaSection(upcoming({ type: "tv", genre: "on_the_air" }));

    // Category Endpoints
    this.props.getCategoriesList(categories({ type: "movie" }));
    this.props.getCategoriesList(categories({ type: "tv" }));
  }

  render() {
    return (
      <React.Fragment>
        <Header title={this.state.currentCategory.name} />
        <ViewTab />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  const { movies, tv, categoryMedia } = state;
  return { movies, categoryMedia };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMediaSection,
      getCategoriesList,
      getCategoriesMedia
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
// <Category currentCategory={this.state.currentCategory} />

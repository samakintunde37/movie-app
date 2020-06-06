import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { connect } from "react-redux";
import { TvScene, MovieScene } from "../components/TabScene";

class ViewTab extends React.Component {
  state = {
    tabState: {
      index: 0,
      routes: [
        { key: "first", title: "Movies" },
        { key: "second", title: "TV Shows" },
      ],
    },
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <MovieScene movies={this.props.movies.movies} />;
      case "second":
        return <TvScene tv={this.props.tv.tv} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state.tabState}
        timingConfig={{ duration: 600 }}
        springConfig={{ damping: 20, stiffness: 0.5 }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "transparent" }}
            style={styles.fadedWhite}
            labelStyle={{ textTransform: "capitalize" }}
          />
        )}
        renderScene={this.renderScene}
        swipeDistanceThreshold={0.8 * Dimensions.get("window").width}
        swipeVelocityThreshold={2000}
        onIndexChange={index =>
          this.setState({ tabState: { ...this.state.tabState, index } })
        }
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}
const mapStateToProps = state => {
  const { movies, tv } = state;
  return { movies, tv };
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  fadedWhite: {
    backgroundColor: "rgb(52,52,52)",
  },
});

export default connect(mapStateToProps)(ViewTab);

import React from "react";
import { withNavigation } from "react-navigation";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import Header from "../containers/Header";

const Category = props => {
  console.log(props);
  const width = Dimensions.get("window").width / 3;
  const { movies } = props.categoryMedia;

  const renderMovies = () => {
    return movies.length !== 0 ? (
      <ScrollView contentContainerStyle={{ padding: 0 }}>
        <Header title={props.navigation.state.params.category.name} />
        <View style={styles.categoryMoviesWrapper}>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              image={movie.poster_path}
              movie={movie}
              width={width}
            />
          ))}
        </View>
      </ScrollView>
    ) : (
      <Spinner size="large" />
    );
  };

  return <View style={{ flex: 1 }}>{renderMovies()}</View>;
};

const styles = StyleSheet.create({
  categoryMoviesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 24.0,
    backgroundColor: "#111111"
  }
});

const mapStateToProps = state => {
  const { categoryMedia } = state;
  return { categoryMedia };
};
export default connect(mapStateToProps)(withNavigation(Category));

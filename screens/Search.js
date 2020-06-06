import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import {
  Text,
  Animated,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Header from "../containers/Header";
import Spinner from "../components/Spinner";
import { bindActionCreators } from "redux";
import { searchIndex } from "../actions/SearchAction";
import MovieCard from "../components/MovieCard";
import { isEmpty } from "../Helpers";
class SearchScreen extends Component {
  state = { text: "" };
  submitSearch = () => {
    console.log(this.state.text);
    this.props.searchIndex(this.state.text);
  };
  render() {
    const width = Dimensions.get("window").width / 3;
    const { searchedIndex } = this.props.search;
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <ScrollView>
          <Header title={"Search"} />
          <Animated.View>
            <View style={styles.searchInput}>
              <MaterialIcons
                name="search"
                size={22}
                style={styles.searchIcon}
                color="#bbb"
              />
              <TextInput
                clearButtonMode="always"
                style={styles.inputText}
                onEndEditing={this.submitSearch}
                onSubmitEditing={this.submitSearch}
                keyboardAppearance="default"
                placeholder={"Search Movies"}
                placeholderTextColor={"#999"}
                underlineColorAndroid={"#fff"}
                autoCorrect={false}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
          </Animated.View>
          {!isEmpty(searchedIndex) ? (
            <ScrollView contentContainerStyle={{ padding: 0 }}>
              <View style={styles.categoryMoviesWrapper}>
                {searchedIndex.map(movie => {
                  return (
                    <MovieCard
                      key={movie.id}
                      image={movie.poster_path}
                      movie={movie}
                      width={width}
                    />
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <Spinner size="small" />
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  categoryMoviesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 24.0,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    position: "absolute",
    left: 13,
    top: 12,
  },
  inputText: {
    marginTop: 14,
    marginLeft: 43,
    fontSize: 15,
    color: "#999",
  },
});
const mapStateToProps = state => {
  const { search } = state;
  return { search };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchIndex,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(SearchScreen));

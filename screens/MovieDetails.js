import React from "react";
import {
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { withNavigation } from "react-navigation";
import {
  Ionicons as IOSIcon,
  MaterialIcons as MaterialIcon,
} from "@expo/vector-icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty, timeConvert } from "../Helpers";
import { LinearGradient } from "expo";

import MovieActions from "../components/MovieActions";
import RelatedMovies from "../containers/RelatedMovies";
import Ratings from "../components/Ratings";
import { typography } from "../styles/typography";
import Spinner from "../components/Spinner";
import { getVideo } from "../actions/MovieActions";

const MovieDetails = props => {
  let { movieInfo, credits, similarMovies, nowPlaying } = props.movies;
  const { goBack } = props.navigation;
  let cast = credits.cast;
  let crew = credits.crew;

  const handlePlay = movie => {
    props.getVideo(movie.id);
    props.navigation.navigate("Player", { nowPlaying });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {!isEmpty(movieInfo) ? (
        <ScrollView style={{ flex: 1, flexGrow: 1 }}>
          <View style={styles.movieDetailsArt}>
            <Image
              source={{
                uri: `http://image.tmdb.org/t/p/w780/${
                  movieInfo.backdrop_path
                }`,
              }}
              style={{
                height: 300,
              }}
              resizeMode="cover"
            />
            <LinearGradient
              style={{
                flex: 1,
                flexDirection: "row",
                position: "absolute",
                width: Dimensions.get("window").width,
                zIndex: 8,
              }}
              colors={["#000000ff", "#00000088", "#00000000"]}
            >
              <View style={styles.movieDetailsHeader}>
                <TouchableHighlight onPress={() => goBack()}>
                  {Platform.OS === "ios" ? (
                    <IOSIcon
                      name="ios-arrow-back"
                      style={{ color: "#ffffff", fontSize: 32.0 }}
                    />
                  ) : (
                    <MaterialIcon
                      name="arrow-back"
                      style={{ color: "#ffffff", fontSize: 24.0 }}
                    />
                  )}
                </TouchableHighlight>
              </View>
            </LinearGradient>
            <View style={styles.playBtnWrapper}>
              <TouchableOpacity onPress={() => handlePlay(movieInfo)}>
                <MaterialIcon
                  name="play-circle-outline"
                  style={styles.playBtn}
                />
              </TouchableOpacity>
            </View>

            <LinearGradient
              style={{
                flex: 1,
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                width: Dimensions.get("window").width,
                zIndex: 1,
                height: 50.0,
              }}
              colors={["#00000000", "#000000aa", "#000000ff"]}
            >
              <View />
            </LinearGradient>
          </View>
          <View style={styles.movieDetailsInfo}>
            <Text style={styles.movieTitle}>{movieInfo.title}</Text>
            <View style={styles.metaInfoWrapper}>
              <View style={styles.metaInfo}>
                <Ratings rating={movieInfo.vote_average / 2} />
              </View>
              <Text style={styles.metaInfo}>
                {" "}
                {movieInfo.release_date.substring(4, 0)}
              </Text>
              <Text style={styles.metaInfo}>
                {" "}
                {movieInfo.adult ? "18+" : "16+"}
              </Text>
              <Text style={styles.metaInfo}>{movieInfo.genres[0].name}</Text>
              <Text style={styles.metaInfo}>
                {" "}
                {timeConvert(movieInfo.runtime)}
              </Text>
            </View>

            <Text style={styles.movieDescription}>{movieInfo.overview}</Text>

            <View style={{ marginTop: 8.0, marginBottom: 24.0 }}>
              <Text style={styles.metaInfo}>
                Casts:
                {cast ? (
                  cast
                    .slice(0, 3)
                    .map(cast => <Text key={cast.cast_id}> {cast.name}, </Text>)
                ) : (
                  <Text />
                )}
                ...
              </Text>
              <Text style={styles.metaInfo}>
                Producers:
                {crew ? (
                  crew
                    .filter(crew => crew.job === "Producer")
                    .map(crew => (
                      <Text key={crew.credit_id}> {crew.name} </Text>
                    ))
                ) : (
                  <Text />
                )}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handlePlay(movieInfo)}
              style={styles.watchBtnWrapper}
            >
              <Text style={styles.watchBtn}>Watch Trailer</Text>
            </TouchableOpacity>

            <MovieActions />
          </View>
          <RelatedMovies movies={similarMovies} />
        </ScrollView>
      ) : (
        <Spinner size={"large"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  playBtnWrapper: {
    position: "absolute",
    flex: 1,
    width: Dimensions.get("window").width,
    height: 300.0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  playBtn: {
    padding: 16.0,
    color: "#ffffff",
    fontSize: 64,
  },
  movieDetailsArt: {
    height: 300,
    overflow: "hidden",
  },
  movieDetailsHeader: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16.0,
    paddingVertical: 8.0,
  },
  movieDetailsInfo: {
    paddingHorizontal: 16.0,
    flex: 2,
  },
  movieTitle: { color: "#D0D0D0", fontSize: 20.0, marginVertical: 12.0 },
  metaInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16.0,
  },
  metaInfo: {
    color: "#737373",
    lineHeight: 20.0,
    marginRight: 28.0,
    fontSize: 12.0,
  },
  movieDescription: {
    color: "#D0D0D0",
    width: Dimensions.get("window").width * 0.8,
  },
  watchBtnWrapper: {
    maxWidth: 124.0,
    paddingHorizontal: 12.0,
    borderColor: "#D0D0D0",
    borderWidth: 2.0,
    paddingVertical: 8.0,
  },
  watchBtn: {
    ...typography.center,
    color: "#fff",
  },
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getVideo,
    },
    dispatch
  );

const mapStateToProps = state => {
  const { movies, tv } = state;
  return { movies, tv };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(MovieDetails));

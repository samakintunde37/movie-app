import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withNavigation } from "react-navigation";
import { WhiteSpace, WingBlank } from "@ant-design/react-native";
import { Text, View, TouchableOpacity } from "react-native";
import {
  getMovieInfo,
  getCredits,
  getSimilarMovie,
} from "../actions/MovieActions";
import ProgressiveImage from "./ProgressiveImage";

const MovieCard = props => {
  let { height, width } = props;
  const navigate = () => {
    console.log(props.movie);
    props.getMovieInfo(props.movie.id);
    props.getCredits(props.movie.id);
    props.getSimilarMovie(props.movie.id);
    props.navigation.navigate("Detail");
  };
  return (
    <TouchableOpacity onPress={() => navigate()}>
      <View style={{ width: width }}>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <ProgressiveImage
            source={{
              uri: `http://image.tmdb.org/t/p/w780/${props.image}`,
            }}
            style={{
              height: height ? height : 1.3 * width,
              padding: 16,
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
          <WhiteSpace size="md" />
          <Text
            style={{
              color: "#D0D0D0",
              textAlign: "center",
              fontSize: 14,
              opacity: 0.7,
            }}
          >
            {props.movie.title}
          </Text>
        </WingBlank>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCredits, getMovieInfo, getSimilarMovie }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(withNavigation(MovieCard));

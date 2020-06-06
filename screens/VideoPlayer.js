import React, { Component } from "react";
import {
  Text,
  View,
  WebView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { isEmpty } from "../Helpers";
import Spinner from "../components/Spinner";
import { withNavigation } from "react-navigation";
import { ScreenOrientation, Video } from "expo";

import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";

class VideoPlayer extends Component {
  state = {
    mute: false,
    shouldPlay: true,
  };

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay,
    }));
  };

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  };
  handleCloseVideoPlayer = () => {
    this.props.navigation.goBack();
  };

  render() {
    let { nowPlaying } = this.props.movies;
    const { width } = Dimensions.get("window");
    console.log(nowPlaying);
    return (
      <View style={{ backgroundColor: "#000000" }}>
        {!isEmpty(nowPlaying) ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 12.0,
              }}
            >
              <Text style={{ color: "#fff" }}>{nowPlaying.name}</Text>
              <TouchableOpacity
                onPress={this.handleCloseVideoPlayer}
                style={styles.closeBtnWrapper}
              >
                <AntDesign name="close" style={styles.closeBtn} />
              </TouchableOpacity>
            </View>
            <Video
              source={{
                // uri: `https://www.youtube.com/watch?v=${nowPlaying.key}`,
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              shouldPlay
              isLooping
              isMuted={false}
              resizeMode={Video.RESIZE_MODE_COVER}
              useNativeControls={true}
              shouldPlay={this.state.shouldPlay}
              resizeMode="cover"
              style={{ width, height: 300 }}

              // style={{
              //   width: Dimensions.get("window").width,
              //   height: Dimensions.get("window").height,
              // }}
            />
            <View style={styles.controlBar}>
              <MaterialIcons
                name={this.state.mute ? "volume-mute" : "volume-up"}
                size={45}
                color="white"
                onPress={this.handleVolume}
              />
              <MaterialIcons
                name={this.state.shouldPlay ? "pause" : "play-arrow"}
                size={45}
                color="white"
                onPress={this.handlePlayAndPause}
              />
            </View>
          </View>
        ) : (
          <Spinner size={"large"} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closeBtnWrapper: {
    padding: 12.0,
    justifyContent: "flex-end",
  },

  closeBtn: {
    fontSize: 32.0,
    color: "#ffffff",
    zIndex: 5,
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
};

export default connect(mapStateToProps)(withNavigation(VideoPlayer));

import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    borderRadius: 9,
  },
});
class ProgressiveImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image {...this.props} />
      </View>
    );
  }
}
export default ProgressiveImage;

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

const Ratings = ({ rating }) => {
  const renderRating = () => {
    const roundedRating = Number(rating.toFixed(1));

    let fullStars = Math.floor(roundedRating);
    let halfStars = Number(`${roundedRating}`.slice(-1)) >= 5 ? 1 : 0;

    let stars = [];

    let iconName;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        iconName = "ios-star";
      } else if (i > fullStars && i == fullStars + halfStars) {
        iconName = "ios-star-half";
      } else {
        iconName = "ios-star-outline";
      }
      stars.push(<Icon key={i} name={iconName} style={styles.star} />);
    }

    return stars;
  };

  return <View style={styles.rating}>{renderRating()}</View>;
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
  },
  star: {
    color: "#737373",
    fontSize: 16.0,
  },
});

export default Ratings;

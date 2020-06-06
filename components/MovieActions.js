import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { typography } from "../styles/typography";

const actions = [
  { icon: "like2", title: "Rate" },
  { icon: "plus", title: "Add" },
  { icon: "sharealt", title: "Share" },
  { icon: "download", title: "Download" }
];

const MovieActions = () => {
  const handleAction = type => {
    console.log(`${type} button`);
  };

  return (
    <View style={styles.movieActionWrapper}>
      {actions.map(action => (
        <TouchableOpacity
          key={action.icon}
          onPress={() => handleAction(action.title)}
        >
          <View>
            <AntDesign name={action.icon} style={styles.movieActionIcon} />
            <Text style={styles.movieActionText}>{action.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  movieActionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 32.0
  },
  movieActionIcon: {
    ...typography.center,
    color: "#737373",
    fontSize: 20.0
  },
  movieActionText: {
    ...typography.center,
    fontSize: 12.0,
    color: "#737373"
  }
});

export default MovieActions;

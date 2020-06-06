import React from "react";
import MovieCard from "./MovieCard";
import { Text, View, ScrollView } from "react-native";

const MovieSection = props => {
  return (
    <View style={{ paddingTop: 40 }}>
      <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 24 }}>
        {props.title}
      </Text>
      <ScrollView horizontal>
        {props.movies.length > 0 ? (
          props.movies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              image={movie.poster_path}
              height={props.height}
              width={props.width ? props.width : 150}
            />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};
export default MovieSection;

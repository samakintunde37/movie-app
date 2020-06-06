import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";

import MovieCard from "../components/MovieCard";

const RelatedMovies = ({ movies }) => {
  return (
    <View style={{ paddingLeft: 16.0 }}>
      {movies.length > 0 ? (
        <Text style={{ color: "#ffffff" }}>Related Movies</Text>
      ) : (
        <View />
      )}
      <ScrollView horizontal>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: -8
          }}
        >
          {movies.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                movie={movie}
                image={movie.poster_path}
                width={Dimensions.get("window").width / 2.25}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RelatedMovies;

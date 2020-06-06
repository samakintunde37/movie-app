import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Tabs, WhiteSpace } from "@ant-design/react-native";
import MovieSection from "../components/MovieSection";
import MovieCard from "./MovieCard";

const style = {
  flex: 1,
  backgroundColor: "#000",
};

const TvScene = ({ tv }) => {
  return (
    <ScrollView style={style}>
      <View style={style}>
        <View style={{ paddingTop: 40 }}>
          <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 24 }}>
            Latest Tv Series
          </Text>
          <ScrollView horizontal>
            {tv.latest.length > 0 ? (
              tv.latest.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                  image={movie.backdrop_path}
                  height={200}
                  width={320}
                />
              ))
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
        </View>
        <MovieSection movies={tv.topRated} title={"Top TV Series"} />
        <MovieSection movies={tv.upcoming} title={"Upcoming TV Series"} />
        <MovieSection movies={tv.topPicks} title={"Top Picks For You"} />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
      </View>
      {/* </Tabs> */}
    </ScrollView>
  );
};

const MovieScene = ({ movies }) => {
  return (
    <ScrollView style={style}>
      <View style={style}>
        <View style={{ paddingTop: 40 }}>
          <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 24 }}>
            Latest Movies
          </Text>
          <ScrollView horizontal>
            {movies.latest.length > 0 ? (
              movies.latest.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                  image={movie.backdrop_path}
                  height={200}
                  width={320}
                />
              ))
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
        </View>
        <MovieSection movies={movies.topRated} title={"Top Movies"} />
        <MovieSection movies={movies.upcoming} title={"Upcoming Movies"} />
        <MovieSection
          movies={movies.recentlyWatched}
          title={"Recently Watched By You"}
        />
        <MovieSection movies={movies.topPicks} title={"Top Picks For You"} />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
      </View>
      {/* </Tabs> */}
    </ScrollView>
  );
};

export { TvScene, MovieScene };

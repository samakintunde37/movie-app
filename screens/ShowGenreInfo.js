import React, { Component } from "react";
import { Text, View } from "react-native";
import ShowResults from "../components/ShowResults";
import Header from "../containers/Header";

const ShowGenreInfo = props => {
  return (
    <React.Fragment>
      <Header />
      <ShowResults title={"genre"} />
    </React.Fragment>
  );
};
export default ShowGenreInfo;

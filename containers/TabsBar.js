import React from "react";
import { connect } from "react-redux";
import { Icon, TabBar } from "@ant-design/react-native";
import ViewTab from "./SegmentedControl";
import { StyleSheet, Text, View } from "react-native";
const TabsBar = props => {
  const onChangeTab = tabName => {
    return tabName;
  };
  return (
    <View style={{ backgroundColor: "#000" }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#D0D0D0"
        barTintColor="#000013"
      >
        <TabBar.Item
          title="Home"
          selected={props.movies.selectedTab === "home"}
          onPress={() => onChangeTab("homme")}
        >
          <ViewTab />
        </TabBar.Item>
        <TabBar.Item title="Search">
          <Text>Downloads</Text>
        </TabBar.Item>
        <TabBar.Item title="Downloads">
          <Text>Downloads</Text>
        </TabBar.Item>
      </TabBar>
    </View>
  );
};
const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
};

export default connect(mapStateToProps)(TabsBar);

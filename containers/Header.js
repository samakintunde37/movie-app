import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { Ionicons as Icon } from "@expo/vector-icons";

import Categories from "./Categories";

class Header extends Component {
  state = {
    modalVisible: false,
  };

  static defaultProps = {
    title: "Movies App",
    active: "Category: Action",
  };

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render = () => {
    return (
      <View
        style={{
          backgroundColor: "#000",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          maxHeight: 50.0,
          paddingHorizontal: 16.0,
        }}
      >
        <TouchableHighlight
          onPress={this.setModalVisible}
          style={styles.hamburgerWrapper}
        >
          <Icon name="ios-menu" size={32} color="white" />
        </TouchableHighlight>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16.0, marginLeft: -48 }}>
            {this.props.title}
          </Text>
        </View>
        {this.state.modalVisible && (
          <Categories
            visible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            setCurrentCategory={this.props.setCurrentCategory}
          />
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  hamburgerWrapper: {
    padding: 8.0,
    marginLeft: -8.0,
  },
});

const mapStateToProps = state => {
  const { active } = state;
  return { active };
};

export default Header;

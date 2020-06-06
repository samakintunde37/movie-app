import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Ionicons as Icon } from "@expo/vector-icons";

import {
  getCategoriesMedia,
  resetCategory,
} from "../actions/CategoriesActions";
import { categoryMovieList } from "../services/api";

class Categories extends Component {
  // Handles Navigation to specific category
  goToCategory = category => {
    // This resets all the data so it's empty and the loader can take effect
    this.props.resetCategory();

    this.props.getCategoriesMedia(
      categoryMovieList({ type: "movie", genre: category.id })
    );
    this.props.setModalVisible();
    this.props.navigation.navigate("GenreInfo", { category });
  };
  render() {
    const { movies, visible, setModalVisible } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.categoriesWrapper}>
          <ScrollView style={{ flex: 1, flexGrow: 10 }}>
            {movies.movies.categories.map(category => (
              <TouchableHighlight
                key={category.id}
                style={styles.category}
                onPress={() => this.goToCategory(category)}
              >
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableHighlight>
            ))}
          </ScrollView>
          <View style={styles.closeBtnWrapper}>
            <TouchableHighlight
              style={styles.closeBtn}
              onPress={setModalVisible}
            >
              <Icon name="ios-close-circle-outline" size={32} color="#ffffff" />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  categoriesWrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 66.0,
    paddingBottom: 16.0,
    backgroundColor: "#000013",
  },
  category: {
    marginVertical: 16.0,
    padding: 8.0,
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
  closeBtnWrapper: {
    flex: 1,
    alignItems: "center",
    padding: 24.0,
    maxHeight: 100.0,
  },
  closeBtn: {
    padding: 8.0,
  },
});

const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCategoriesMedia,
      resetCategory,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Categories));

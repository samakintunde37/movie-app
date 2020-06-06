import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./AppNavigator";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from "react-native";
import NavigationService from "./NavigationService";

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
class App extends React.Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([Ionicons.font]);

    await Promise.all([...fontAssets]);
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#000",
            paddingTop: StatusBar.currentHeight
          }}
        >
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <View style={styles.container}>
            <TouchableHighlight
              onPress={() => NavigationService.navigate("Home")}
            >
              <View style={styles.placeItems}>
                <Ionicons
                  name="ios-home"
                  size={24}
                  style={{ color: "#D0D0D0" }}
                />
                <Text style={styles.mainColor}>Home</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => NavigationService.navigate("Search")}
            >
              <View style={styles.placeItems}>
                <Ionicons
                  name="md-search"
                  size={24}
                  style={{ color: "#D0D0D0" }}
                />
                <Text style={styles.mainColor}>search</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => NavigationService.navigate("Download")}
            >
              <View style={styles.placeItems}>
                <Ionicons
                  name="ios-folder"
                  size={24}
                  style={{ color: "#D0D0D0" }}
                />
                <Text style={styles.mainColor}>Downloads</Text>
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainColor: {
    color: "#D0D0D0",
    fontSize: 12
  },
  placeItems: {
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12
  }
});

export default App;

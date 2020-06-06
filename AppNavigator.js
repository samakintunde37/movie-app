import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";
import Home from "./screens/Home";
import SearchScreen from "./screens/Search";
import Downloads from "./screens/Download";
import MovieDetails from "./screens/MovieDetails";
import Category from "./screens/Category";
import VideoPlayer from "./screens/VideoPlayer";

const HomeNavigator = createSwitchNavigator({
  Home: { screen: Home },
  GenreInfo: { screen: Category },
});
const AppNavigator = createStackNavigator(
  {
    Home: HomeNavigator,
    Search: { screen: SearchScreen },
    Download: { screen: Downloads },
    Detail: { screen: MovieDetails },
    Player: { screen: VideoPlayer },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

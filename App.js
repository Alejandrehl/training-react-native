import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ExerciseComponent from "./src/screens/ExerciseComponent";
import ListScreen from "./src/screens/ListScreen";

let navigator;
navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercise: ExerciseComponent,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

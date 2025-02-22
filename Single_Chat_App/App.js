import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./app/screens/LoginScreen";
import ChatScreen from "./app/screens/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: "none",
  }
);
export default createAppContainer(AppNavigator);

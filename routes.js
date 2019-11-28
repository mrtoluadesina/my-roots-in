import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavBackButton from "./src/components/navBackButton";

import Signup from "./src/views/Signup";
import Home from "./src/views/Home";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Signup: {
      screen: Signup,
      navigationOptions: ({ navigation }) => ({
        header: <NavBackButton onPress={() => navigation.goBack()} />,
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        },
        headerTintColor: "#ffffff"
      })
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
);

export default AppRoutes = createAppContainer(MainNavigator);

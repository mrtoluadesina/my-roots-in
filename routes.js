import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavBackButton from "./src/components/navBackButton";

import Signup from "./src/views/Signup";
import Home from "./src/views/Home";
import VerificationCompleted from "./src/views/VerificationCompleted/index";
import Login from "./src/views/Login";
import Settings from "./src/views/Settings";

const MainNavigator = createStackNavigator(
  {
    // Home Route
    Home: { screen: Home },

    // Signup Route
    Signup: {
      screen: Signup,
      navigationOptions: ({ navigation }) => ({
        header: <NavBackButton onPress={() => navigation.goBack()} />,
        headerStyle: {
          borderBottomWidth: 0
        },
        headerTintColor: "#ffffff"
      })
    },

    // Login Route
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            showProgress={false}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0
        },
        headerTintColor: "#ffffff"
      })
    },
    VerificationCompleted: { screen: VerificationCompleted },

    // Setting Route
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            showProgress={false}
          />
        ),
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

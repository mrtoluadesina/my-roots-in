import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavBackButton from "./src/components/navBackButton";

import Signup from "./src/views/Signup";
import Home from "./src/views/Home";
import Verify from "./src/views/Verify";
import Login from "./src/views/Login";
import Settings from "./src/views/Settings";
import ForgotPassword from "./src/views/ForgotPassword";

const MainNavigator = createStackNavigator(
  {
    // Home Route
    Home: { screen: Home },

    // Signup Route
    Signup: {
      screen: Signup,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.5}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
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
          borderBottomWidth: 0
        }
      })
    },

    //Forgot Password
    ForgotPassword: {
      screen: ForgotPassword,
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

    Verify: {
      screen: Verify,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={1}
          />
        )
      })
    },

    //Dashboard
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerStyle: {
          borderBottomWidth: 0
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

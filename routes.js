import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NavBackButton from './src/components/navBackButton';

import Signup from './src/views/Signup';
import Home from './src/views/Home';
import VerificationCompleted from './src/views/VerificationCompleted/index';
import Login from './src/views/Login';
import Settings from './src/views/Settings';
import Verify from './src/views/Verify';
import ForgotPassword from './src/views/ForgotPassword';
import Dashboard from './src/views/Dashboard';
import PlantTree from './src/views/PlantTree';
import OccasionTypes from './src/views/Occasions';
import HowToPlant from './src/views/HowToPlant';
import TypeOfTree from './src/views/TypeOfTree';
import WhereToPlant from './src/views/WhereToPlant';

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
            showProgress
            progressLevel={0.5}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
      }),
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
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
      }),
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
        },
      }),
    },

    // Forget Password Route
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
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
      }),
    },

    // Verify Account Route
    Verify: {
      screen: Verify,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={1}
          />
        ),
      }),
    },

    PlantTree: {
      screen: PlantTree,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.5}
          />
        ),
      }),
    },

    // Occasion Type Route
    OccasionTypes: {
      screen: OccasionTypes,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.7}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },

    //Dashboard
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        header: null,
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },

    //Where to plant
    WhereToPlant: {
      screen: WhereToPlant,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.2}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },

    // How to plant a tree Route
    HowToPlant: {
      screen: HowToPlant,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.7}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },

    // How to plant a tree Route
    TypeOfTree: {
      screen: TypeOfTree,
      navigationOptions: ({ navigation }) => ({
        header: (
          <NavBackButton
            onPress={() => navigation.goBack()}
            progressLevel={0.7}
          />
        ),
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },
  },

  {
    initialRouteName: 'Verify',
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: '#ffffff',
    },
  },
);

export default AppRoutes = createAppContainer(MainNavigator);

import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Init } from '~/screens/init';
import { Home } from '~/screens/home';
import { Preloader } from '~/components/preloader';
import { TabBarComponent } from '~/components/TabBarNavigation';
import TopNavigation from '~/components/TopNavigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
    },
  },
  Details: {
    screen: Home,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} />,
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Categories: HomeStack,
    List: Preloader,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      return {
        headerTitle: routeName,
      };
    },
    tabBarComponent: TabBarComponent,
  },
);

export const Navigation = createSwitchNavigator({
  Init: { screen: Init },
  App: { screen: TabNavigator },
});

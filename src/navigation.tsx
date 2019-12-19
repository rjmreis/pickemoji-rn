import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Init } from '~/screens/init';
import { Home } from '~/screens/home';
import { Details } from '~/screens/details';
import { Preloader } from '~/components/preloader';
import { TabBarComponent } from '~/components/TabBarNavigation';
import TopNavigation from '~/components/TopNavigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} hideBackButton={true} />,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} alignment="center" title="Subcategories" />,
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

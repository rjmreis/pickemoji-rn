import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Init } from '~/screens/init';
import { Home } from '~/screens/home';
import { Details } from '~/screens/details';
import { List } from '~/screens/list';
import { About } from '~/screens/about';
import { TabBarComponent } from '~/components/tab-bar-navigation';
import TopNavigation from '~/components/top-navigation';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} hideBackButton={true} title="Pickemoji RN" />,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} alignment="center" title="Categories" />,
    },
  },
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    ListModal: {
      screen: List,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: RootStack,
    About,
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

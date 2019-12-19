import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationProps } from '~/types/navigation';

export const TabBarComponent = ({ navigation }: NavigationProps) => {
  const onSelect = (index: number) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
        <BottomNavigationTab title="CATEGORIES" />
        <BottomNavigationTab title="ABOUT" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

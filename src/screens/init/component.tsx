import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Props } from './';

export const InitComponent = (props: Props) => {
  React.useEffect(() => {
    props.fetchEmojis();

    if (props.emojis) {
      resetNavigation();
    }
  });

  const resetNavigation = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    props.navigation.dispatch(resetAction);
  };

  return <ActivityIndicator size="large" />;
};

import React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { Preloader } from '~/components/preloader';
import { Props } from './';

export const InitComponent = (props: Props) => {
  React.useEffect(() => {
    if (props.emojis) {
      return resetNavigation();
    }

    props.fetchEmojis();
  });

  const resetNavigation = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    props.navigation.dispatch(resetAction);
  };

  return <Preloader />;
};

import { createStackNavigator } from 'react-navigation-stack';
import { Init } from '~/screens/init';
import { Counter } from '~/screens/counter';

export const Navigation = createStackNavigator({
  Init: {
    screen: Init,
  },
  Home: {
    screen: Counter,
  },
});

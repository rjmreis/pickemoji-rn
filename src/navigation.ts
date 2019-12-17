import { createStackNavigator } from 'react-navigation-stack';
import { Init } from '~/screens/init';
import { Home } from '~/screens/home';

export const Navigation = createStackNavigator({
  Init: {
    screen: Init,
  },
  Home: {
    screen: Home,
  },
});

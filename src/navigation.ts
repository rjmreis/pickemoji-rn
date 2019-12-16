import { createStackNavigator } from 'react-navigation-stack';
import { Counter } from '~/screens/counter';

export const Navigation = createStackNavigator({
  Home: {
    screen: Counter,
  },
});

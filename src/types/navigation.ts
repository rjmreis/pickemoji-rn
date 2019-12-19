import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export interface NavigationProps {
  navigation: NavigationStackProp;
}

export interface NavigationScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

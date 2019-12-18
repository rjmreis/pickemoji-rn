import React from 'react';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { NavigationProps } from '~/types/navigation';

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

const TopNavigationComponent = ({ navigation }: NavigationProps) => (
  <SafeAreaView>
    <TopNavigation leftControl={BackAction()} title={navigation.state.routeName} />
  </SafeAreaView>
);

export default withNavigation(TopNavigationComponent);

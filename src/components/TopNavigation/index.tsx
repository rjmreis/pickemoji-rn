import React from 'react';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { NavigationProps } from '~/types/navigation';

interface OwnProps {
  hideBackButton?: boolean;
  title?: string;
  alignment?: 'center' | 'start' | undefined;
}

type Props = OwnProps & NavigationProps;

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;

const TopNavigationComponent: React.FunctionComponent<Props> = ({
  navigation,
  hideBackButton,
  title,
  alignment = 'center',
}) => {
  const BackAction = () =>
    !hideBackButton ? <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack(null)} /> : undefined;

  return (
    <SafeAreaView>
      <TopNavigation
        leftControl={BackAction()}
        title={title ? title : navigation.state.routeName}
        alignment={alignment}
      />
    </SafeAreaView>
  );
};

export default withNavigation(TopNavigationComponent);

import { connect, ConnectedProps } from 'react-redux';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import { getEmojis } from '~/state/emoji/selectors';
import { fetchEmojis } from '~/state/emoji/actions';
import { RootState } from '~/state/reducer';
import { InitComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  emojis: getEmojis(state),
});

const mapDispatchToProps = {
  fetchEmojis,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type StateProps = ConnectedProps<typeof connector>;
interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export type Props = StateProps & NavigationProps;

export const Init = connector(InitComponent);

import { connect, ConnectedProps } from 'react-redux';

import { getCategories } from '~/state/emoji/selectors';
import { RootState } from '~/state/reducer';
import { HomeComponent } from './component';
import { NavigationScreenProps } from '~/types/navigation';

const mapStateToProps = (state: RootState) => ({
  emojiCategories: getCategories(state),
});

const connector = connect(mapStateToProps);

type StateProps = ConnectedProps<typeof connector>;
export type Props = StateProps & NavigationScreenProps;

export const Home = connector(HomeComponent);

import { connect, ConnectedProps } from 'react-redux';

import { getCategories } from '~/state/emoji/selectors';
import { RootState } from '~/state/reducer';
import { HomeComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  emojiCategories: getCategories(state),
});

const connector = connect(mapStateToProps);

export type Props = ConnectedProps<typeof connector>;
export const Home = connector(HomeComponent);

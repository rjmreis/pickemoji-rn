import { connect, ConnectedProps } from 'react-redux';

import { getCategories } from '~/state/emoji/selectors';
import { fetchEmojis } from '~/state/emoji/actions';
import { RootState } from '~/state/reducer';
import { NavigationScreenProps } from '~/types/navigation';
import { InitComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  emojis: getCategories(state),
});

const mapDispatchToProps = {
  fetchEmojis,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type StateProps = ConnectedProps<typeof connector>;
export type Props = StateProps & NavigationScreenProps;

export const Init = connector(InitComponent);

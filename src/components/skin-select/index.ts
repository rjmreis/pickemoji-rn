import { connect, ConnectedProps } from 'react-redux';

import { getSkinTone } from '~/state/emoji/selectors';
import { setSkin } from '~/state/emoji/actions';
import { RootState } from '~/state/reducers';
import { SkinSelectComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  skinTone: getSkinTone(state),
});

const mapDispatchToProps = {
  setSkin,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type StateProps = ConnectedProps<typeof connector>;
export type Props = StateProps;

export const SkinSelect = connector(SkinSelectComponent);

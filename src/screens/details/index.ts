import { connect, ConnectedProps } from 'react-redux';

import { getSubCategories, getSkinTone } from '~/state/emoji/selectors';
import { RootState } from '~/state/reducers';
import { DetailsComponent } from './component';
import { NavigationScreenProps } from '~/types/navigation';

const mapStateToProps = (state: RootState, props: NavigationScreenProps) => {
  const categoryId = props.navigation.getParam('categoryId', '');

  return {
    subCategories: getSubCategories(state, { id: categoryId }),
    skinTone: getSkinTone(state),
  };
};

const connector = connect(mapStateToProps);

type StateProps = ConnectedProps<typeof connector>;
export type Props = StateProps & NavigationScreenProps;

export const Details = connector(DetailsComponent);

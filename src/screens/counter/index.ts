import { connect, ConnectedProps } from 'react-redux';

import { increaseCounter, decreaseCounter } from '~/state/counter/actions';
import { fetchEmojis } from '~/state/emoji/actions';
import { RootState } from '~/state/reducer';
import { CounterComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  counter: state.counterReducer.counter,
});

const mapDispatchToProps = {
  reduxIncreaseCounter: increaseCounter,
  reduxDecreaseCounter: decreaseCounter,
  fetchEmojis
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;
export const Counter = connector(CounterComponent);

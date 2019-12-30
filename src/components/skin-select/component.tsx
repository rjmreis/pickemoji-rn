import React from 'react';
import { Button } from '@ui-kitten/components';
import { getEmoji } from '~/utils/emoji';
import { Container, HintText, GroupButton, ScrollableContainer } from './styles';
import { Props } from './';

export const SkinSelectComponent = (props: Props) => {
  const setSkinTone = (skinTone: string) => {
    props.setSkin(skinTone);
  };

  return (
    <Container>
      <HintText>Set your default skin tone</HintText>
      <ScrollableContainer>
        <GroupButton appearance="outline" status="basic">
          <Button onPress={() => setSkinTone('none')}>{getEmoji(':raised_hand:', 'none')}</Button>
          <Button onPress={() => setSkinTone('white')}>{getEmoji(':raised_hand:', 'white')}</Button>
          <Button onPress={() => setSkinTone('creamWhite')}>{getEmoji(':raised_hand:', 'creamWhite')}</Button>
          <Button onPress={() => setSkinTone('lightBrown')}>{getEmoji(':raised_hand:', 'lightBrown')}</Button>
          <Button onPress={() => setSkinTone('brown')}>{getEmoji(':raised_hand:', 'brown')}</Button>
          <Button onPress={() => setSkinTone('darkBrown')}>{getEmoji(':raised_hand:', 'darkBrown')}</Button>
        </GroupButton>
      </ScrollableContainer>
    </Container>
  );
};

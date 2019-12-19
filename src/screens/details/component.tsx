import React from 'react';
import nodeEmoji from 'node-emoji';
import { ScrollableContainer } from '~/styles';
import { CardContainer, CardItem, CardItemText, CardItemContent } from '~/styles';
import { Props } from './';

export const DetailsComponent = (props: Props) => {
  const goToList = (emojis: string[]) =>
    props.navigation.navigate('ListModal', {
      emojis,
    });

  return (
    <ScrollableContainer>
      {props.subCategories?.map(subCategory => (
        <CardContainer key={subCategory.id} onPress={() => goToList(subCategory.emojis)}>
          <CardItem>
            <CardItemContent>
              <CardItemText category="label">{subCategory.name}</CardItemText>
            </CardItemContent>
            <CardItemContent>
              <CardItemText category="h1">{nodeEmoji.get(subCategory.ico)}</CardItemText>
            </CardItemContent>
          </CardItem>
        </CardContainer>
      ))}
    </ScrollableContainer>
  );
};

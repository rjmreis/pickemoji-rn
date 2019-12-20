import React from 'react';
import { getEmoji } from '~/utils/emoji';
import { ScrollableContainer } from '~/styles';
import { CardContainer, CardItem, CardItemText, CardItemContent } from '~/styles';
import { Props } from './';

export const DetailsComponent = (props: Props) => {
  const goToList = (emojis: string[], title: string) =>
    props.navigation.navigate('ListModal', {
      emojis,
      title,
      skinTone: props.skinTone,
    });

  return (
    <ScrollableContainer>
      {props.subCategories?.map(subCategory => (
        <CardContainer key={subCategory.id} onPress={() => goToList(subCategory.emojis, subCategory.name)}>
          <CardItem>
            <CardItemContent>
              <CardItemText category="label">{subCategory.name}</CardItemText>
            </CardItemContent>
            <CardItemContent>
              <CardItemText category="h1">{getEmoji(subCategory.ico, props.skinTone)}</CardItemText>
            </CardItemContent>
          </CardItem>
        </CardContainer>
      ))}
    </ScrollableContainer>
  );
};

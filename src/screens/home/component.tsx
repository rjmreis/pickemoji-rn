import React from 'react';
import nodeEmoji from 'node-emoji';
import { ScrollableContainer } from '~/styles';
import { CardContainer, CardItem, CardItemText, CardItemContent } from '~/styles';
import { Props } from './';

export const HomeComponent = (props: Props) => {
  return (
    <ScrollableContainer>
      {props.emojiCategories?.map(category => {
        return (
          <CardContainer
            key={category.id}
            onPress={() => {
              props.navigation.navigate('Details', {
                categoryId: category.id,
              });
            }}>
            <CardItem>
              <CardItemContent>
                <CardItemText category="label">{category.name}</CardItemText>
              </CardItemContent>
              <CardItemContent>
                <CardItemText category="h1">{nodeEmoji.get(category.ico)}</CardItemText>
              </CardItemContent>
            </CardItem>
          </CardContainer>
        );
      })}
    </ScrollableContainer>
  );
};

import React from 'react';
import nodeEmoji from 'node-emoji';
import { ScrollableContainer } from '~/styles';
import { CardContainer, CardItem, CardItemText, CardItemContent } from '~/styles';
import { Props } from './';

export const DetailsComponent = (props: Props) => {
  return (
    <ScrollableContainer>
      {props.subCategories?.map(category => (
        <CardContainer key={category.id}>
          <CardItem>
            <CardItemContent>
              <CardItemText category="label">{category.name}</CardItemText>
            </CardItemContent>
            <CardItemContent>
              <CardItemText category="h1">{nodeEmoji.get(category.ico)}</CardItemText>
            </CardItemContent>
          </CardItem>
        </CardContainer>
      ))}
    </ScrollableContainer>
  );
};

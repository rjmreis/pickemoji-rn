import React from 'react';
import nodeEmoji from 'node-emoji';
import { Container, ItemContainer, ItemCard, ItemText, ItemContent } from './styles';
import { Props } from './';

export const HomeComponent = (props: Props) => {
  return (
    <Container>
      {props.emojiCategories?.map(category => (
        <ItemContainer key={category.id}>
          <ItemCard>
            <ItemContent>
              <ItemText category="label">{category.name}</ItemText>
            </ItemContent>
            <ItemContent>
              <ItemText category="h1">{nodeEmoji.get(category.ico)}</ItemText>
            </ItemContent>
          </ItemCard>
        </ItemContainer>
      ))}
    </Container>
  );
};

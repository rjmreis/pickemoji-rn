import React from 'react';
import { getEmoji } from '~/utils/emoji';
import { SkinSelect } from '~/components/skin-select';
import { ScrollableContainer } from '~/styles';
import { CardContainer, CardItem, CardItemText, CardItemContent } from '~/styles';
import { Props } from './';

export const HomeComponent = (props: Props) => {
  return (
    <>
      <SkinSelect />
      <ScrollableContainer>
        {props.emojiCategories?.map(category => {
          return (
            <CardContainer
              key={category.id}
              onPress={() =>
                props.navigation.navigate('Details', {
                  categoryId: category.id,
                })
              }>
              <CardItem>
                <CardItemContent>
                  <CardItemText category="label">{category.name}</CardItemText>
                </CardItemContent>
                <CardItemContent>
                  <CardItemText category="h1">{getEmoji(category.ico, props.skinTone)}</CardItemText>
                </CardItemContent>
              </CardItem>
            </CardContainer>
          );
        })}
      </ScrollableContainer>
    </>
  );
};

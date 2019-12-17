import React from 'react';
import { View, Text } from 'react-native';
import nodeEmoji from 'node-emoji';
import { Props } from './';

export const HomeComponent = (props: Props) => {
  return (
    <View>
      {props.emojiCategories?.map(category => (
        <Text key={category.id}>{`${category.name} : ${nodeEmoji.get(category.ico)}`}</Text>
      ))}
    </View>
  );
};

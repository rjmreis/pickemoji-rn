import React from 'react';
import { Clipboard } from 'react-native';
import * as emojiUnicode from 'emoji-dictionary';
import { Icon, Button, Input } from '@ui-kitten/components';
import { NavigationScreenProps } from '~/types/navigation';
import { ScrollableContainer } from '~/styles';
import {
  HeaderArea,
  TitleText,
  InputContainer,
  HintText,
  CardContainer,
  CardItem,
  CardItemText,
  CardItemContent,
} from './styles';

export const CloseIcon = () => <Icon name="close-outline" width={24} height={24} />;

export const List = ({ navigation }: NavigationScreenProps) => {
  const [value, setValue] = React.useState('');

  const emojis = navigation.getParam('emojis', []);
  const title = navigation.getParam('title', '');

  return (
    <>
      <HeaderArea>
        <TitleText category="s1">{title}</TitleText>
        <Button appearance="ghost" icon={CloseIcon} onPress={() => navigation.goBack()} />
      </HeaderArea>
      <InputContainer>
        <Input placeholder="Search..." value={value} onChangeText={setValue} />
        <HintText appearance="hint">Select any emoji to copy it to clipboard</HintText>
      </InputContainer>
      <ScrollableContainer>
        {emojis
          .filter((emoji: string) => emoji.includes(value?.toLowerCase()))
          .map((emoji: string) => (
            <CardContainer key={emoji} onPress={() => Clipboard.setString(emoji)}>
              <CardItem>
                <CardItemContent>
                  <CardItemText category="h4">{emojiUnicode.getUnicode(emoji)}</CardItemText>
                </CardItemContent>
                <CardItemContent>
                  <CardItemText category="c1">{emoji}</CardItemText>
                </CardItemContent>
              </CardItem>
            </CardContainer>
          ))}
      </ScrollableContainer>
    </>
  );
};

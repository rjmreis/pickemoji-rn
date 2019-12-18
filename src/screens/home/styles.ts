import styled from 'styled-components/native';
import { Text } from '@ui-kitten/components';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}))`
  padding: 10px;
`;

export const ItemContainer = styled.TouchableOpacity`
  border: 1px solid lightgrey;
  margin: 5px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 0px;
`;

export const ItemCard = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  padding: 5px;
  background-color: white;
`;

export const ItemText = styled(Text)`
  text-align: center;
`;

export const ItemContent = styled.View`
  align-items: center;
`;

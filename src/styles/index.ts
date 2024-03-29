import styled from 'styled-components/native';
import { Text } from '@ui-kitten/components';

export const ScrollableContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}))`
  padding: 10px;
  background-color: rgb(240, 241, 244);
`;

export const CardContainer = styled.TouchableOpacity`
  border: 1px solid lightgrey;
  margin: 5px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 0px;
`;

export const CardItem = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  padding: 5px;
  background-color: white;
`;

export const CardItemText = styled(Text)`
  text-align: center;
`;

export const CardItemContent = styled.View`
  align-items: center;
`;

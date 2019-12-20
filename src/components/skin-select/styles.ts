import styled from 'styled-components/native';
import { Text, ButtonGroup } from '@ui-kitten/components';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;
  background-color: rgb(240, 241, 244);
`;

export const HintText = styled(Text)`
  padding: 10px 0 5px;
  text-align: center;
`;

export const GroupButton = styled(ButtonGroup).attrs(() => ({
  margin: 8,
}))``;

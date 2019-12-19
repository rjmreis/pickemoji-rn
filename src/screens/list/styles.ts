import styled from 'styled-components/native';
import { Text } from '@ui-kitten/components';

export const HeaderArea = styled.View`
  display: flex;
  flex-direction: row;
  padding: 40px 0 0;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled(Text)`
  padding-left: 25px;
`;

export const InputContainer = styled.View`
  padding: 10px 10px 0;
  background-color: rgb(240, 241, 244);
`;

export const HintText = styled(Text)`
  padding: 10px 0 5px;
  text-align: center;
`;

export const CardContainer = styled.TouchableOpacity`
  border: 1px solid lightgrey;
  margin: 5px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 0px;
`;

export const CardItem = styled.View`
  width: 80px;
  height: 80px;
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

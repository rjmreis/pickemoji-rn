import React from 'react';
import { Linking } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { Container, AboutContainer } from './styles';

export const About = () => {
  return (
    <Container>
      <AboutContainer>
        <Icon name="cube-outline" width={32} height={32} />
        <Text category="h6">{'{ rjmreis }'}</Text>
        <Text category="s2" status="primary" onPress={() => Linking.openURL('https://github.com/rjmreis/exotic-shorthair')}>
          exotic-shorthair
        </Text>
      </AboutContainer>
    </Container>
  );
};

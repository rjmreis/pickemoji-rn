import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export const Preloader = () => (
  <Container>
    <ActivityIndicator size="large" color="#0000ff" />
  </Container>
);

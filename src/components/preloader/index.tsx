import React from 'react';
import { Spinner } from '@ui-kitten/components';
import { Container } from './styles';

export const Preloader = () => (
  <Container>
    <Spinner status="primary" />
  </Container>
);

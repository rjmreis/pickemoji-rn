import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps } from '~/types/navigation';

export const List = ({ navigation }: NavigationScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

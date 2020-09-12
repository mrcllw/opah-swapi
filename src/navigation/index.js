import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation({ children }) {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  )
}

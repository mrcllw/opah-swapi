import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from '../screens/Characters';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Characters' component={Characters} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

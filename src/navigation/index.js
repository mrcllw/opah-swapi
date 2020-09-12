import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Characters from '../screens/Characters';
import Films from '../screens/Films';
import Character from '../screens/Character';

const Tabs = createBottomTabNavigator();
function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Characters' component={Characters} />
      <Tabs.Screen name='Films' component={Films} />
    </Tabs.Navigator>
  )
}

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabsNavigation' component={TabsNavigation} />
        <Stack.Screen name='Character' component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

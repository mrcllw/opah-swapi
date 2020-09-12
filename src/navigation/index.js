import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Characters from '../screens/Characters';
import Films from '../screens/Films';
import Character from '../screens/Character';
import Film from '../screens/Film';
import Text from '../components/Text';
import Image from '../components/Image';
import dart from '../assets/icons/dart_vader.png';
import death from '../assets/icons/death_star.png';

const Tabs = createBottomTabNavigator();
function TabsNavigation() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'yellow',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        }
      }}
    >
      <Tabs.Screen
        name='Characters'
        component={Characters}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={dart} {...{ size, color }} />
          ),
          tabBarLabel: ({ color }) => (
            <Text size={9} color={color}>Characters</Text>
          )
        }}
      />
      <Tabs.Screen
        name='Films'
        component={Films}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={death} {...{ size, color }} />
          ),
          tabBarLabel: ({ color }) => (
            <Text size={9} color={color}>Films</Text>
          )
        }}
      />
    </Tabs.Navigator>
  )
}

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <Text size={30}>Star wars</Text>,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTintColor: 'yellow'
        }}
      >
        <Stack.Screen name='TabsNavigation' component={TabsNavigation} />
        <Stack.Screen name='Character' component={Character} />
        <Stack.Screen name='Film' component={Film} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

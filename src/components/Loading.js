import React from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';
import logo from '../assets/icons/falcon.png';

export default function Loading() {
  const animatedValue = new Animated.Value(0);

  Animated.loop(Animated.timing(
    animatedValue,
    {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true
    }
  )).start();

  return (
    <Container>
      <Animated.Image
        source={logo}
        style={{
          tintColor: 'yellow',
          width: 50,
          height: 50,
          transform: [{
            rotate: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }}
      />
    </Container>
  )
}

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
});

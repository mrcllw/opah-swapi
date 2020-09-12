import React from 'react';
import styled from 'styled-components/native';
import Image from '../components/Image';
import Text from '../components/Text';

export default function HorizontalListItem({ image, text, onPress }) {
  return (
    <Container {...{ onPress }}>
      <Image source={image} size={60} />
      <Text align='center' size={12}>{text}</Text>
    </Container>
  )
}

const Container = styled.TouchableOpacity({
  width: 100,
  alignItems: 'center',
});

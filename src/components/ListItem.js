import React from 'react';
import styled from 'styled-components/native';
import Image from './Image';
import Text from './Text';

export default function ListItem({ onPress, image, text }) {
  return (
    <Container onPress={onPress}>
      <Row>
        <Image source={image} size={40} />
        <TextContainer>
          <Text size={20}>{text}</Text>
        </TextContainer>
      </Row>
    </Container>
  )
}

const Container = styled.TouchableOpacity({
  borderWidth: 0.5,
  borderRadius: 3,
  borderColor: 'yellow',
  padding: 10,
  margin: 10
});

const Row = styled.TouchableOpacity({
  flexDirection: 'row',
  alignItems: 'center'
});

const TextContainer = styled.View({
  marginLeft: 10
});

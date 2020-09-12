import React from 'react';
import styled from 'styled-components/native';

export default function Text({ size, children }) {
  return (
    <Container {...{ size }}>{children}</Container>
  )
}

const Container = styled.Text(({ size }) => ({
  fontFamily: 'Starjedi',
  color: 'yellow',
  fontSize: size,
  textTransform: 'lowercase',
}));

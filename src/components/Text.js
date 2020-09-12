import React from 'react';
import styled from 'styled-components/native';

export default function Text({ size, align = 'left', children }) {
  return (
    <Container {...{ size, align }}>{children}</Container>
  )
}

const Container = styled.Text(({ size, align }) => ({
  fontFamily: 'Starjedi',
  color: 'yellow',
  fontSize: size,
  textTransform: 'lowercase',
  textAlign: align
}));

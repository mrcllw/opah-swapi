import React from 'react';
import styled from 'styled-components/native';

export default function Text({ size, align = 'left', color = 'yellow', children }) {
  return (
    <Container {...{ size, align, color }}>{children}</Container>
  )
}

const Container = styled.Text(({ size, align, color }) => ({
  fontFamily: 'Starjedi',
  color: color,
  fontSize: size,
  textTransform: 'lowercase',
  textAlign: align
}));

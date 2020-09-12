import React from 'react';
import styled from 'styled-components/native';

export default function Image({ source, size }) {
  return (
    <Container {...{ source, size }} />
  )
}

const Container = styled.Image(({ size }) => ({
  width: size,
  height: size,
  borderRadius: size / 2
}));

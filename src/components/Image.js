import React from 'react';
import styled from 'styled-components/native';

export default function Image({ source, size, color }) {
  return (
    <Container {...{ source, size, color }} />
  )
}

const Container = styled.Image(({ size, color }) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  tintColor: color
}));

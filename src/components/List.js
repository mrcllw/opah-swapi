import React from 'react';
import styled from 'styled-components/native';

export default function List({ data, item, horizontal = false }) {
  return (
    <Container
      horizontal={horizontal}
      keyExtractor={(item, index) => String(index)}
      data={data}
      renderItem={item}
    />
  )
};

const Container = styled.FlatList({
  backgroundColor: 'black',
});

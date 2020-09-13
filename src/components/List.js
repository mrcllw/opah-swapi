import React from 'react';
import styled from 'styled-components/native';

export default function List({ data, item, horizontal = false, ...props }) {
  return (
    <Container
      horizontal={horizontal}
      keyExtractor={(item, index) => String(index)}
      data={data}
      renderItem={item}
      {...props}
    />
  )
};

const Container = styled.FlatList({
  backgroundColor: 'black',
});

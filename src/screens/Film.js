import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import Text from '../components/Text';
import List from '../components/List';
import HorizontalListItem from '../components/HorizontalListItem';
import { setFilm } from '../store/actions/filmsActions';
import filmsImages from '../assets/images/films';
import charactersImages from '../assets/images/characters';

export default function Film() {
  const { navigate } = useNavigation();
  const { params: { id } } = useRoute();
  const dispatch = useDispatch();
  const { film } = useSelector(state => state.films);

  useEffect(() => {
    loadFilm();
  }, []);

  async function loadFilm() {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();

    const characters = [];
    for (let urlCharacter of data.characters) {
      const response = await fetch(urlCharacter);
      const character = await response.json();
      characters.push(character);
    }

    dispatch(setFilm({ ...data, characters }));
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={filmsImages[id]} size={200} />
        <Text size={20}>{film.title}</Text>
      </ImageContainer>
      <ResumeContainer>
        <Text size={15}>Director: {film.director}</Text>
        <Text size={15}>Producer: {film.producer}</Text>
        <Row>
          <Text size={15}>Characters:</Text>
          <Text size={15}>Release: {film.release_date}</Text>
        </Row>
      </ResumeContainer>
      <List
        horizontal
        data={film.characters}
        item={({ item }) => {
          const id = item.url.replace(/[^0-9]/g, '');
          return (
            <HorizontalListItem
              image={charactersImages[id]}
              text={item.name}
              onPress={() => navigate('Character', { id })}
            />
          )
        }}
      />
      <OpeningContainer>
        <Text size={15}>Opening:</Text>
        <Text align='center' size={15}>{film.opening_crawl}</Text>
      </OpeningContainer>
    </Container>
  )
}

const Container = styled.ScrollView({
  flex: 1,
  backgroundColor: 'black',
  paddingTop: 10
});

const ImageContainer = styled.View({
  alignItems: 'center',
});

const ResumeContainer = styled.View({
  marginVertical: 20,
  marginHorizontal: 10
});

const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const OpeningContainer = styled.View({
  marginHorizontal: 10,
  marginVertical: 20
});

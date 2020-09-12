import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import Text from '../components/Text';
import List from '../components/List';
import HorizontalListItem from '../components/HorizontalListItem';
import { setCharacter } from '../store/actions/charactersActions';
import charactersImages from '../assets/images/characters';
import filmsImages from '../assets/images/films';

export default function Character() {
  const { params: { id } } = useRoute();
  const dispatch = useDispatch();
  const { character } = useSelector(state => state.characters);

  useEffect(() => {
    loadCharacter();
  }, []);

  async function loadCharacter() {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();

    const films = [];
    for (let urlFilm of data.films) {
      const response = await fetch(urlFilm);
      const film = await response.json();
      films.push(film);
    }

    dispatch(setCharacter({ ...data, films }));
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={charactersImages[id]} size={200} />
        <Text size={20}>{character.name}</Text>
      </ImageContainer>
      <BioContainer>
        <Row>
          <Text size={15}>Height: {character.height}</Text>
          <Text size={15}>Mass: {character.mass}</Text>
        </Row>
        <Row>
          <Text size={15}>Hair: {character.hair_color}</Text>
          <Text size={15}>Skin: {character.skin_color}</Text>
        </Row>
        <Row>
          <Text size={15}>Eye: {character.eye_color}</Text>
          <Text size={15}>Birth: {character.birth_year}</Text>
        </Row>
        <Row>
          <Text size={15}>Films:</Text>
          <Text size={15}>Gender: {character.gender}</Text>
        </Row>
      </BioContainer>
      <List
        horizontal
        data={character.films}
        item={({ item }) => (
          <HorizontalListItem
            image={filmsImages[item.episode_id]}
            text={item.title}
          />
        )}
      />
    </Container>
  )
}

const Container = styled.View({
  flex: 1,
  backgroundColor: 'black',
  paddingTop: 10
});

const ImageContainer = styled.View({
  alignItems: 'center',
});

const BioContainer = styled.View({
  marginVertical: 20,
  marginHorizontal: 10
});

const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

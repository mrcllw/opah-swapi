import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import List from '../components/List';
import ListItem from '../components/ListItem';
import { setCharacters } from '../store/actions/charactersActions';
import charactersImages from '../assets/images/characters';

export default function Characters() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { characters } = useSelector(state => state.characters);

  useFocusEffect(
    useCallback(() => {
      loadCharacters()
    }, [])
  );

  async function loadCharacters() {
    const response = await fetch('https://swapi.dev/api/people/');
    const { results } = await response.json();
    dispatch(setCharacters(results));
  }

  return (
    <List
      data={characters}
      item={({ item, index }) => {
        const id = index + 1;
        return (
          <ListItem
            image={charactersImages[id]}
            text={item.name}
            onPress={() => navigate('Character', { id })}
          />
        )
      }}
    />
  )
}
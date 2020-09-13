import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import { setCharacters, setLoadingCharacters, setMoreCharacters } from '../store/actions/charactersActions';
import charactersImages from '../assets/images/characters';

export default function Characters() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { loading, page, total, characters } = useSelector(state => state.characters);

  useEffect(() => {
    loadInitialCharacters();
  }, []);

  async function loadCharacters() {
    dispatch(setLoadingCharacters());
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data;
  }

  async function loadInitialCharacters() {
    const { count, results } = await loadCharacters();
    dispatch(setCharacters({ characters: results, total: count }));
  }

  async function loadMoreCharacters() {
    if (loading || characters.length == total) return;
    const { results } = await loadCharacters();
    dispatch(setMoreCharacters(results));
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
      onEndReached={loadMoreCharacters}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => loading && <Loading />}
      ListFooterComponentStyle={{
        flex: 1
      }}
      contentContainerStyle={{
        flexGrow: 1
      }}
    />
  )
}
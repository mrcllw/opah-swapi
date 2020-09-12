import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import List from '../components/List';
import ListItem from '../components/ListItem';
import { setFilms } from '../store/actions/filmsActions';
import filmsImages from '../assets/images/films';

export default function Films() {
  const dispatch = useDispatch();
  const { films } = useSelector(state => state.films);

  useFocusEffect(
    useCallback(() => {
      loadFilms()
    }, [])
  );

  async function loadFilms() {
    const response = await fetch('https://swapi.dev/api/films/');
    const { results } = await response.json();
    dispatch(setFilms(results));
  }

  return (
    <List
      data={films}
      item={({ item, index }) => {
        const id = index + 1;
        return (
          <ListItem image={filmsImages[id]} text={item.title} />
        )
      }}
    />
  )
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import { setFilms, setLoadingFilms } from '../store/actions/filmsActions';
import filmsImages from '../assets/images/films';

export default function Films() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { loading, films } = useSelector(state => state.films);

  useEffect(() => {
    loadFilms();
  }, []);

  async function loadFilms() {
    dispatch(setLoadingFilms());
    const response = await fetch('https://swapi.dev/api/films/');
    const { results } = await response.json();
    dispatch(setFilms(results));
  }

  return loading ? (<Loading />) : (
    <List
      data={films}
      item={({ item, index }) => {
        const id = index + 1;
        return (
          <ListItem
            image={filmsImages[id]}
            text={item.title}
            onPress={() => navigate('Film', { id })}
          />
        )
      }}
    />
  )
}
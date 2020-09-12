import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Starjedi: require('./src/assets/fonts/Starjedi.ttf'),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <Navigation />
    </Provider>
  ) : null;
}

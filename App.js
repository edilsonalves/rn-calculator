import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    'iria-sans-bold': require('./assets/fonts/InriaSans-Bold.ttf'),
    'roboto-mono-medium': require('./assets/fonts/RobotoMono-Medium.ttf'),
    'roboto-mono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
  });

  if (fontsLoaded) {
    return <Routes />;
  } else {
    return <AppLoading />;
  }
}

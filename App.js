import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {View, Text} from 'react-native';
import Router from './src/Router';
const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Router />
    </SafeAreaProvider>
  );
};

export default App;

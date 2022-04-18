import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Router from './src/Router';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
};

export default App;

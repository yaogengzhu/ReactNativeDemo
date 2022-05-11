import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Router from './src/Router';
const App = () => {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
};

export default App;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Detail from '../pages/Detail';
import TabHome from './TabHome';

const Stack = createNativeStackNavigator();

const HasLogin = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TabHome"
      component={TabHome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

export default HasLogin;

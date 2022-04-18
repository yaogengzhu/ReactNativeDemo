import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// 组件
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const NotLogin = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      options={{
        title: '登录',
      }}
      component={Login}
    />
  </Stack.Navigator>
);

export default NotLogin;

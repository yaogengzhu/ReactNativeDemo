import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="设置" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabHome;

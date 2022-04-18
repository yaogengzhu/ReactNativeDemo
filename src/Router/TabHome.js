import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Person from '../pages/Person';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  const getIconName = route => {
    const {name} = route;
    switch (name) {
      case 'Home':
        return 'home';
      case 'Settings':
        return 'settings';
      case 'Person':
        return 'person';
      default:
        '';
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Icon name={getIconName(route)} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '首页',
        }}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: '设置',
        }}
        component={Settings}
      />
      <Tab.Screen
        name="Person"
        options={{
          title: '个人中心',
          // headerShown: false,
        }}
        component={Person}
      />
    </Tab.Navigator>
  );
};

export default TabHome;

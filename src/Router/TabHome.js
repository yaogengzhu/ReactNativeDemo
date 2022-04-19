import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';

import Home from '../pages/Home';
import Tax from '../pages/Tax';
import Person from '../pages/Person';
import Service from '../pages/Service';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  const getIconName = route => {
    const {name} = route;
    switch (name) {
      case 'Home':
        return 'home';
      case 'Tax':
        return 'list';
      case 'Service':
        return 'mood';
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
        tabBarActiveTintColor: '#2177b8',
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
        name="Tax"
        options={{
          title: '办税',
        }}
        component={Tax}
      />
      <Tab.Screen
        name="Service"
        options={{
          title: '服务',
        }}
        component={Service}
      />
      <Tab.Screen
        name="Person"
        options={{
          title: '个人中心',
        }}
        component={Person}
      />
    </Tab.Navigator>
  );
};

export default TabHome;

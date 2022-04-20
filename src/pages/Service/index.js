import React from 'react';
import {View, Text} from 'react-native';
import { Header } from '@rneui/themed'
const Service = () => {
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
};

export default Service;

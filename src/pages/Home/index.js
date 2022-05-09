import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Input} from '@rneui/themed';
import Header from './modules/Header';
import Slideshow from './modules/Slideshow';
import SubMenu from './modules/SubMenu';
import PullToRefefresh from '../Components/PullToRefresh';

const Home = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

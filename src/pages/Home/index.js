import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  NativeModules,
  StatusBar,
} from 'react-native';

import {Input} from '@rneui/themed';
import Header from './modules/Header';
import Slideshow from './modules/Slideshow';
import SubMenu from './modules/SubMenu';
import PullToRefefresh from '../Components/PullToRefresh';

const Home = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <StatusBar barStyle="light-content" />
      <PullToRefefresh>
        <Slideshow />
        <SubMenu />
      </PullToRefefresh>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Button, Image} from '@rneui/base';
import {Input} from '@rneui/themed';
import Header from './modules/Header';
import logo from '../../assets/images/bg.jpeg';

import PullToRefefresh from '../Components/PullToRefresh';

const Home = () => {
  return (
    <SafeAreaView style={styles.content}>
      {/* <Header /> */}
      <PullToRefefresh>
        <View>
          <Image source={logo} style={styles.img} />
        </View>
      </PullToRefefresh>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  img: {
    width: '100%',
    height: 400,
  },
});

export default Home;

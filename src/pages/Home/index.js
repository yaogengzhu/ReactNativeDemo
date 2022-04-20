import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  NativeModules,
  StatusBar,
} from 'react-native';
import {Button, Image} from '@rneui/base';
import {Input} from '@rneui/themed';
import Header from './modules/Header';
import b1 from '../../assets/images/b1.jpeg';
import b2 from '../../assets/images/b2.jpeg';
import b3 from '../../assets/images/b3.jpeg';
import PullToRefefresh from '../Components/PullToRefresh';
import Swiper from 'react-native-swiper';

const Home = props => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <StatusBar barStyle="light-content" />
      <PullToRefefresh>
        <Swiper loop autoplay>
          <Image source={b1} style={styles.img} />
          <Image source={b2} style={styles.img} />
          <Image source={b3} style={styles.img} />
        </Swiper>
      </PullToRefefresh>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBarWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    zIndex: 100,
    height: 1000,
    width: '100%',
  },
  titleBarContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  titleBarBg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  imgContent: {
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 300,
  },
});

export default Home;

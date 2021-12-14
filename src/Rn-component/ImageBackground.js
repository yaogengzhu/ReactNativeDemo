/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-14 09:57:30
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-14 10:44:48
 */

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./src/assets/images/avatar.jpeg')}
      style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000',
  },
});

export default App;

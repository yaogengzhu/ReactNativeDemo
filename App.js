import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Menu from './src/component/Menu/Menu';
import Swiper from './src/component/Swiper/index';
import SecondKill from './src/component/SecondKill/index';
import GoodsList from './src/component/GoodsList';

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.page}>
        <Swiper />
        <Menu />
        <SecondKill />
        <GoodsList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    backgroundColor: 'aliceblue',
  },
});

export default App;

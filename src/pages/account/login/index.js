import React from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View>
        <Image
          style={styles.img}
          source={require('../../../assets/images/bg.webp')}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  StatusBar: {
    backgroundColor: 'red',
  },
  img: {
    width: '100%',
    height: 200,
  },
});

export default Index;

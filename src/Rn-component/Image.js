/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 16:08:06
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-14 09:54:54
 */

import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';

const App = () => {
  useEffect(() => {
    Image.getSize(
      'https://reactnative.dev/img/tiny_logo.png',
      (w, h) => {
        console.log(w, h);
      },
      null,
    );
    Image.prefetch('https://reactnative.dev/img/tiny_logo.png');
  }, []);
  return (
    <View style={styles.container}>
      <Image
        fadeDuration={1000}
        style={styles.logo}
        source={require('./src/assets/images/avatar.jpeg')}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        progressiveRenderingEnabled
        onProgress={({nativeEvent: {loaded, total}}) => {
          console.log(loaded, total, '???xxxx');
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Image
        style={styles.logo}
        source={require('./src/assets/images/a.gif')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 66,
    height: 58,
    borderRadius: 5,
  },
});

export default App;

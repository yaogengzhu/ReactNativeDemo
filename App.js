/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 16:08:06
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-13 17:45:52
 */

import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/assets/images/avatar.jpeg')}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
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

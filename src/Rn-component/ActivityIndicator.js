/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 15:01:18
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-13 15:08:37
 * ActivityIndicator 指示器组件
 */

import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text>TouchableHighlight</Text>
      <ActivityIndicator animating={show} color="#f40" size="large" />
      <Button
        title="show/hidden"
        onPress={() => {
          setShow(!show);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

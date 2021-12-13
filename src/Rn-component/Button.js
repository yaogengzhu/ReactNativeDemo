/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 15:01:18
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-13 16:06:27
 * Button 指示器组件
 *
 * porps：必须
 * title
 * onPress
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
        onPress={() => setShow(!show)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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

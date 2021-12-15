/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-15 16:58:17
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-15 17:01:59
 */

import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity>
        <Text>hello wrold</Text>
      </TouchableOpacity>
      <Button title="测试" />
    </View>
  );
};

export default App;

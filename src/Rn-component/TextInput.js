/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-14 09:57:30
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-15 11:54:32
 * Text  selectable 是否可以被选中
 */

import React from 'react';
import {TextInput} from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      placeholder="Useless Placeholder"
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
};

export default UselessTextInput;

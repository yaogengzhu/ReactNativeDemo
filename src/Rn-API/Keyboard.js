/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-15 16:58:17
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-15 19:20:57
 */

import React, {useEffect} from 'react';
import {Keyboard, TextInput, StyleSheet} from 'react-native';

const Example = () => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    alert('Keyboard Shown');
  };

  const _keyboardDidHide = () => {
    alert('Keyboard Hidden');
  };

  return (
    <TextInput
      style={s.input}
      placeholder="Click here ..."
      onSubmitEditing={Keyboard.dismiss}
    />
  );
};

const s = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default Example;

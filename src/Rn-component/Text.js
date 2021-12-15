/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-14 09:57:30
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-15 11:42:04
 * Text  selectable 是否可以被选中
 */

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <Text style={styles.baseText}>
      I am boldboldboldboldboldboldboldboldboldboldboldboldboldboldbold
      <Text dataDetectorType="phoneNumber">15871602731</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;

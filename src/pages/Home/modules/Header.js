import React, {useEffect} from 'react';
import {Icon} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';
import {getDeviceStatusHeight} from '../../../utils/system';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name="explore" color={'#fff'} />
      <Text style={styles.title}>个人所得税</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 47,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;

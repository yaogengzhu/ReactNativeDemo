import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from '@rneui/base';
import a1 from '../../../assets/menus/a1.png';
import a2 from '../../../assets/menus/a2.png';
import a3 from '../../../assets/menus/a3.png';

const menuList = [
  {
    id: 1,
    title: '我要办税',
    icon: a1,
  },
  {
    id: 2,
    title: '我要查询',
    icon: a2,
  },
  {
    id: 3,
    title: '公共服务',
    icon: a3,
  },
];

const SubMenu = () => {
  return (
    <View style={styles.content}>
      <View style={[styles.box, styles.shadowProp]}>
        {menuList.map(item => (
          <View style={styles.item} key={item.id}>
            <Image source={item.icon} style={[styles.img]} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: -60,
    paddingHorizontal: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    height: 100,
    marginVertical: 16,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    width: 30,
    height: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default SubMenu;

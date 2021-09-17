import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {goodsList} from '../../mock/content';

const url = 'https://m.360buyimg.com/mobilecms/s700x280_';
const GoodsList = () => {
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);

  useEffect(() => {
    const lenght = goodsList.length;
    setLeftList(goodsList.slice(0, lenght / 2));
    setRightList(goodsList.slice(lenght / 2, lenght));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {leftList.map(item => (
          <View style={styles.itemOne} key={item.id}>
            <Image style={styles.gImg} source={{uri: url + item.imgbase}} />
            <Text style={styles.gTitle} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.prices}>¥9108.00</Text>
            <Text style={styles.comment}>50万+评论</Text>
          </View>
        ))}
      </View>
      <View style={styles.right}>
        {rightList.map(item => (
          <View style={styles.itemTwo} key={item.id}>
            <Image style={styles.gImg} source={{uri: url + item.imgbase}} />
            <Text style={styles.gTitle} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.prices}>¥{item.oriprice}</Text>
            <Image
              style={{width: 30, height: 18, marginTop: 5}}
              source={{
                uri: 'https://img12.360buyimg.com/img/s48x28_jfs/t1/127567/8/7519/1313/5f165ca9Ea295fca1/b90967cc602f446a.png',
              }}
            />
            <Text style={styles.comment}>50万+评论</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  left: {
    width: '48%',
  },

  itemOne: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    // height: 130,
  },
  itemTwo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  right: {
    width: '48%',
  },
  gImg: {
    width: '96%',
    height: 190,
    borderRadius: 5,
  },
  gTitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#000',
    lineHeight: 25,
  },
  prices: {
    marginTop: 4,
    fontSize: 18,
    color: '#ff4142',
  },
  comment: {
    marginTop: 3,
    fontSize: 14,
    color: '#999',
  },
});
export default GoodsList;

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import goodList from '../../mock/goodsList.json';

const SecondKill = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View>
          <Text>京东秒杀</Text>
        </View>
        {/* <View></View> */}
      </View>
      <View style={[styles.context]}>
        <FlatList
          data={goodList}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <TouchableHighlight activeOpacity={0.6}>
                <View style={styles.goodsBox} key={item.poolid}>
                  <Image style={styles.goodsImg} source={{uri: item.imgbase}} />
                  <Text style={styles.goodPrice}>${item.chprice}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
          keyExtractor={item => item.poolid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 160,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  nav: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  gooodContent: {
    flexDirection: 'row',
  },
  goodsImg: {
    width: 60,
    height: 80,
    // backgroundColor: 'purple',
  },
  goodsBox: {
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 120,
  },
  goodPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default SecondKill;

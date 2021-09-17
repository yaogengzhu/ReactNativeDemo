import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Swiper = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/206196/37/3022/134872/6141c0e4Ee71ebcca/380785f4db464c18.jpg!cr_1053x420_4_0!q70.jpg.dpg',
        }}
        style={styles.img}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 150,
    // padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});
export default Swiper;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import b1 from '../../../assets/images/b1.jpeg';
import b2 from '../../../assets/images/b2.jpeg';
import b3 from '../../../assets/images/b3.jpeg';
import Swiper from 'react-native-swiper';
import {Image} from '@rneui/base';

const Slideshow = () => {
  return (
    <View style={[styles.imgHeight]}>
      <Swiper autoplay>
        {[b1, b2, b3].map((item, index) => (
          <Image
            source={item}
            style={[styles.img, styles.imgHeight]}
            key={index}
          />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  imgHeight: {
    height: 350,
  },
  img: {
    width: '100%',
  },
});

export default Slideshow;

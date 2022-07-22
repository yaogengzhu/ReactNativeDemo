import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import {DataPicker} from 'rn-picker-modal';
import {RnTextHighlight} from 'rn-text-highlight';

const Index = () => {
  const dateRef = useRef();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  console.log(fadeAnim, 'fake');

  const onScroll = e => {
    console.log(e, 'e');
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView onScroll={onScroll}>
        <Animated.View
          style={{
            ...styles.header,
            opacity: fadeAnim,
          }}></Animated.View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
  },
});

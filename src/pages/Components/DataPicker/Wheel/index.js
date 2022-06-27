import { debounce } from 'lodash';
import React, {useRef, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

const data = Array.from({length: 10}).map((_, i) => i);

const Wheel = props => {
  const {itemNums, itemHeight} = props;
  const [position, setPosition] = useState(0);

  const wheelRef = useRef();

  const onScroll = v => {
    console.log(v, 'vxxxrv')
    // const {contentOffset} = v.nativeEvent;
    // const {y} = contentOffset;
    // const index = Math.round(y / itemHeight);
    
  };

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.scrollTo({y: itemHeight * position, animated: true});
    }
  }, [position]);

  return (
    <View style={styles.content(itemNums, itemHeight)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={debounce(onScroll, 800)}
        // onScrollAnimationEnd={onScroll}
        ref={wheelRef}
        snapToInterval={itemHeight}
        scrollEventThrottle={16}>
        <View style={styles.scorllContent(Math.floor(itemNums / 2))}>
          {data.map(v => (
            <View key={v} style={styles.item()}>
              <Text>{v}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.maskContent} pointerEvents="none">
        <View style={styles.maskTop} />
        <View style={styles.maskCenter} />
        <View style={styles.maskBottom} />
      </View>
    </View>
  );
};

export default Wheel;

Wheel.defaultProps = {
  itemNums: 7,
  itemHeight: 40,
};

const styles = StyleSheet.create({
  content: (i, nums) => ({
    // width: '30%',
    flex: 1,
    marginTop: 10,
    height: i * nums,
  }),
  item: () => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderColor: 1,
    boorderWidth: 1,
  }),
  scorllContent: i => ({
    marginVertical: i * 40,
  }),

  maskContent: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    opacity: 0.2,
    width: '100%',
    height: '100%',
  },
  maskTop: {
    flex: 1,
  },
  maskCenter: {
    height: 40,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  maskBottom: {
    flex: 1,
  },
});

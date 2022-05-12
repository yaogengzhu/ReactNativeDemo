import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from 'react-native';

const DropDown = () => {
  const {height, width} = useWindowDimensions();
  const [show, setShow] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startViewAnimation = () => {
    Animated.spring(
      //定义弹性动画
      fadeAnim, //改变的动画变量
      {
        toValue: 80, //目标值，也就是动画值变化后的最终值
        duration: 200, //动画持续时长
      },
    ).start();
  };

  const endViewAnimation = () => {
    Animated.spring(
      //定义弹性动画
      fadeAnim, //改变的动画变量
      {
        toValue: 0, //目标值，也就是动画值变化后的最终值
        duration: 200, //动画持续时长
      },
    ).start();
  };

  useEffect(() => {
    if (show) {
      startViewAnimation();
    }
  }, [show]);
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          // setShow(!show);
          if (show) {
            endViewAnimation();
            setTimeout(() => {
              setShow(false);
            }, 210);
          } else {
            setShow(true);
          }
        }}
      />
      {show && (
        <View
          style={[
            styles.content,
            {
              width,
              height,
            },
          ]}>
          <Animated.View
            style={[
              // styles.content,
              {
                backgroundColor: '#eee',
                justifyContent: 'space-around',
                height: fadeAnim,
              },
            ]}
            onPress={() => {
              console.log('ok');
            }}>
            <View></View>
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  modal: {
    width: '100%',
  },

  header: {
    position: 'relative',
    width: '100%',
    height: 70,
    zIndex: 1,
    backgroundColor: 'red',
  },

  content: {
    position: 'absolute',
    top: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

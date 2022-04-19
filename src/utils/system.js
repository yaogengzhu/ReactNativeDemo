import {NativeModules, Platform, StatusBar} from 'react-native';

/**
 * 获取设备状态栏的高度
 */
export const getDeviceStatusHeight = () => {
  if (Platform.OS === 'ios') {
    // 其他就暂时先判断是android
    const {StatusBarManager} = NativeModules;
    return StatusBarManager.getHeight(statusBarHeight => {
      const {height} = statusBarHeight;
      // console.log(height, 'he');
      return height + 40;
    });
  } else {
    return StatusBar.currentHeight;
  }
};

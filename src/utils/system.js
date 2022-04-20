import {Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;
// 获取状态栏的高度
export const getStatusBarHeight = () => {
  return new Promise(resolve => {
    const OS = Platform.OS;
    if (OS === 'ios') {
      StatusBarManager.getHeight(statusBarHeight => {
        console.log(statusBarHeight.height);
        resolve(statusBarHeight.height);
      });
    } else if (OS === 'android') {
      resolve(StatusBarManager || {}).HEIGHT || 0;
    }
    resolve(0);
  });
};

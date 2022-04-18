# RN 学习

根据官网安装提示，安装好相应的开发环境

```bash
yarn

# 启动安卓
yarn android

# 启动iOS
yarn ios
```

## 20 个视图相关组件，Android 和 iOS 各原生组件两个

## 关于真机调试

- xcode 注册个人账号
- 下载个人证书
- 链接手机绑定关系，可以 build 成功

## 跨平台 特殊代码处理

平台方式默认支持四个值

- ios
- Android
- native
- default

方式 1

```js
import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```

方式 2

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});
```

处理组件亦可如此

```js
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb'),
})();

<Component />;
```
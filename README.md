# RN 学习

根据官网安装提示，安装好相应的开发环境


```bash
yarn 

# 启动安卓
yarn android

# 启动iOS
yarn ios
```


## React 如何创建路由

```jsx
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>Home Screen....</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          console.log(props);
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}

function DetailsScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="返回"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeIndex" options={{title: '首页'}}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;

```

## 关于真机调试
- xcode注册个人账号
- 下载个人证书
- 链接手机绑定关系，可以build成功
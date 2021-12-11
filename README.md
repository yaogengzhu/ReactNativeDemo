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


方法都是() . 参数 `RouteName`
- navigate
- push
- goBack
- popToTop 返回堆栈的第一个屏幕

如何向路由传递参数
- 传递参数 
```js
navigation.navigate('Details', {
  itemId: 86,
  otherParam: 'anything you want here',
});
```
- 接收参数
在跳转的页面中，从props中拿出route，可以获取到路由传递过来的参数
```js
const {navigation, route} = props;
console.log(route.params);
```

- 更新参数
可以在当前页面更新参数
```js
navigation.setParams({
  query: 'someText',
});
```

- 初始化参数
```js
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{itemId: 42}} // 默认参数
/>
```

- 如何向上一个页面发送参数

第一个页面接收参数
```js
useEffect(() => {
  if (route.params?.post) {
    console.log(route.params.post);
    // Post updated, do something with `route.params.post`
    // For example, send the post to the server
  }
}, [route.params?.post]);
```

子页面返回，向第一个页面传递参数
```js
<Button
  title="Done"
  onPress={() => {
    // Pass and merge params back to home screen
    navigation.navigate({
      name: 'Home',
      params: { post: 'hello world' },
      merge: true,
    });
  }}
/>
```

### 总结
- 接受第二个可选参数，让你传递参数到你要导航的路由。例如:导航。导航('RouteName'， {paramName: 'value'})。
- 可以通过路由route读取参数。
- 可以使用navigation.setParams更新当前页面的参数
- 初始参数可以通过Screen上的initialParams属性传递



## 关于真机调试
- xcode注册个人账号
- 下载个人证书
- 链接手机绑定关系，可以build成功
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

### header的一些参数options
简单的标题
```jsx
<Stack.Screen
  options={{ title: 'Hello World'}}
/>
```
可以在传递参数方式，定义title, 上级路由跳转过来， 携带参数改变当前页面的标题
```jsx
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={({ route }) => ({ title: route.params.name })}
/>
```

- 如何更新页面的title，可以更新options

```jsx
<Button
  title="更新title"
  onPress={() => {
    console.log('执行');
    navigation.setOptions({title: 'hello'});
  }}
/>

```


### 调整header的样式
三个属性
- headerStyle： 可以设置title的背景色
- headerTintColor
- headerTitleStyle

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={({route}) => ({
    title: route.params.name,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  })}
/>
```

### 设置默认header背景色和title颜色
在`Navigator`中 设置screenOptions 设置统一配置
```jsx
<NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    r>
    <Stack.Screen name="Home" options={{title: '首页'}}>
      {props => <HomeScreen {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

### 用自定义组件替换标题

```js
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://avatars.githubusercontent.com/u/42566669?v=4'}}
    />
  );
}
```

### 总结
- 可以在header上自定义标题
- options 可以是一个对象或者函数，如果是一个函数时，当是一个函数时，会被提供一个带有导航和路由参数的对象
- 在初始化堆栈导航器配置时，可以默认全局配置， 当然options 优先级 高于screenOptions



### Header buttons

给header添加一个button 

```jsx
<Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{
      headerTitle: props => <LogoTitle {...props} />,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    }}
  />
</Stack.Navigator>
```

### 可以在页面中使用setOptions 来触发按钮的事件

```jsx
useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="更新数字" />
    ),
  });
}, [navigation]);
```

### 重写后退按钮
 header API 内置很多方法
```jsx
const DetailsScreen = props => {
const {navigation} = props;

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => <Button title="type" />,
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        GoBack
      </Text>
    ),
  });
}, [navigation]);
```

### 总结
- 可以通过headerLeft 和 headerRight 自定义自己的标题的dom
- 后退按钮是完全可以自定义的如果只想修改title，可以通过headerBackTitle， headerBackTitleStyle， headerBackImageSource 来修改
-  可以为options 设置props来定义

### 嵌套路由

```jsx
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Feed = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <Button
        title="查看"
        onPress={() => {
          console.log(navigation);
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

const Messages = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
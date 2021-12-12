import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  const {navigation, route} = props;

  useEffect(() => {
    if (route.params?.post) {
      console.log(route.params.post);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Home Screen....</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            name: 'zhuyaogeng',
          });
        }}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://avatars.githubusercontent.com/u/42566669?v=4'}}
      />
      <Text style={{fontSize: 40, color: '#fff'}}>hello</Text>
    </View>
  );
}

function DetailsScreen(props) {
  const {navigation, route} = props;
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="更新数字" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{count}</Text>
      <Button
        title="返回"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="更新参数"
        onPress={() => {
          // navigation.goBack();
          // navigation.setParams({query: 'helloworld'});
          navigation.navigate({
            name: 'Home',
            params: {post: 'hhelo'},
            merge: true,
          });
        }}
      />
      <Button
        title="更新title"
        onPress={() => {
          console.log('执行');
          navigation.setOptions({title: 'hello'});
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator(); // 路由栈

function App() {
  return (
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
        <Stack.Screen
          name="Home"
          options={{
            title: '首页',
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
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

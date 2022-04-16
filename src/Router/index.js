import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/account/login';

function HomeScreen(props) {
  const {navigation} = props;
  useEffect(() => {
    navigation.setOptions({
      title: 'Home Screen',
    });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="查看详情"
        onPress={() => {
          navigation.navigate('Detail', {
            id: 1,
            text: 'hello',
          });
        }}
      />
    </View>
  );
}

function DetailScreen(props) {
  const {
    navigation,
    route: {
      params: {id, text},
    },
  } = props;

  return (
    <View>
      <Text>{id}</Text>
      <Text>Detail</Text>
      <Button
        title="goHome"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;

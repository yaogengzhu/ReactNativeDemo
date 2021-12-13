/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 14:59:07
 * @Last Modified by:   yaogeng.zhu
 * @Last Modified time: 2021-12-13 14:59:07
 */

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

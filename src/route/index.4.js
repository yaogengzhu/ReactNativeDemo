import React from 'react';
import {View, StyleSheet, Button, Text, Alert} from 'react-native';

// 创建路由
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = props => {
  const {navigation} = props;

  function goToDetail() {
    navigation.navigate('Details');
  }
  return (
    <View style={styles.container}>
      <Button title="Home Screen" onPress={goToDetail} />
    </View>
  );
};
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
  return (
    <View>
      <Text>DetailsScreen</Text>
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
          options={{
            title: '首页',
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="red"
              />
            ),
          }}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
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

import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    console.log('ok');
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>测试</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

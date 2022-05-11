import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Box} from 'native-base';

const Home = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Box
          alignSelf="center"
          bg="primary.500"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            letterSpacing: 'lg',
          }}>
          This is a Box
        </Box>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

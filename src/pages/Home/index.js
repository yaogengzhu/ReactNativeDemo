import React, {useRef} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import RnDialog from '../../component/Dialog';

const Index = () => {
  const dialogRef = useRef()


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Button title='open' onPress={() => {
        dialogRef.current.open()
      }} />
      <Text>hello world</Text>
      <RnDialog ref={dialogRef} />
    </SafeAreaView>
  );
};

export default Index;

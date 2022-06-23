import React, {useRef} from 'react';
import {SafeAreaView, Button} from 'react-native';
import RnDialog from '../../component/Dialog';

const Index = () => {
  const dialogRef = useRef()


  return (
    <SafeAreaView>
      <Button title='open' onPress={() => {
        dialogRef.current.open()
      }} />
      <RnDialog ref={dialogRef} />
    </SafeAreaView>
  );
};

export default Index;

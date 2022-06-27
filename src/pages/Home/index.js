import React, {useRef} from 'react';
import {SafeAreaView, Button} from 'react-native';
import DataPicker from '../Components/DataPicker';

const Index = () => {
  const dateRef = useRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <DataPicker
        ref={dateRef}
        onConfirm={date => {
          console.log(date);
        }}
      />
      <Button
        title="open"
        onPress={() => {
          dateRef.current.toggleModal();
        }}
      />
    </SafeAreaView>
  );
};

export default Index;

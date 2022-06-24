import React, {useRef} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import RnDialog from '../../component/Dialog';
import DataPicker from '../Components/DataPicker';

const Index = () => {
  const dateRef = useRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <DataPicker ref={dateRef} />
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

import React, {useRef} from 'react';
import {SafeAreaView, Button} from 'react-native';
import { DataPicker } from 'rn-picker-modal'
import { RnTextHighlight } from 'rn-text-highlight'

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
      <RnTextHighlight keyword="helo" originText="hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world" />
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

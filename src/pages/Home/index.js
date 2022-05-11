import React from 'react';
import {useToast, Button, View, useClipboard} from 'native-base';
import BoxDemo from './demo/BoxDemo';
import FabDemo from './demo/FabDemo';
import ActionsheetDemo from './demo/ActionsheetDemo';

const Index = () => {
  const toast = useToast();
  const id = 'test-toast';
  const {onCopy, hasCopied} = useClipboard();

  const toCopy = () => {
    onCopy('hello world');
    toast.closeAll();
    if (hasCopied) {
      if (!toast.isActive(id)) {
        toast.show({
          id,
          title: "Hey! You can't create a duplicate toast",
        });
      }
    }
  };
  return (
    <View>
      <BoxDemo />
      <FabDemo />
      <ActionsheetDemo />
      <Button onPress={() => toCopy()}>Top</Button>
      {/* 复制 */}
    </View>
  );
};

export default Index;

import React from 'react';
import {useToast, Button, View} from 'native-base';
import BoxDemo from './demo/BoxDemo';
import FabDemo from './demo/FabDemo';
import ActionsheetDemo from './demo/ActionsheetDemo'

const Index = () => {
  const toast = useToast();
  return (
    <View>
      <BoxDemo />
      <FabDemo />
      <ActionsheetDemo />
      <Button
        onPress={() =>
          toast.show({
            title: '系统错误',
            render: () => <Button>按钮</Button>,
          })
        }>
        Top
      </Button>
    </View>
  );
};

export default Index;

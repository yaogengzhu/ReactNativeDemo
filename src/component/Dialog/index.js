import React, {useState, useImperativeHandle, forwardRef} from 'react';
import {View} from 'react-native';
import Dialog from 'react-native-dialog';

const RnDialog = forwardRef((props, ref) => {
  const {onClose, onOk} = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>确定删除吗？</Dialog.Title>
        <Dialog.Description>内容删除后，不可恢复</Dialog.Description>
        <Dialog.Button
          label="取消"
          onPress={() => {
            onClose();
            setVisible(false);
          }}
        />
        <Dialog.Button label="确定" onPress={onOk} />
      </Dialog.Container>
    </View>
  );
});

RnDialog.defaultProps = {
  onClose: () => {},
  onOk: () => {},
};

export default RnDialog;

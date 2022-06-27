import React, {useState, useImperativeHandle} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './index.styles';
import DataPickerView from './modules/DataPikerView';
import Header from './modules/Header';

const DataPicker = React.forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  return (
    <Modal
      onBackdropPress={toggleModal}
      style={styles.modal}
      backdropOpacity={0.4}
      isVisible={isModalVisible}>
      <View style={styles.content}>
        <Header />
        <DataPickerView />
      </View>
    </Modal>
  );
});

export default DataPicker;

DataPicker.defaultProps = {
  onConfirm: () => {},
};

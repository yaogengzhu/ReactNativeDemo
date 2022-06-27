import React, {useState, useImperativeHandle} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './index.styles';
import Wheel from './Wheel';

const DataPicker = React.forwardRef((_, ref) => {
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
        <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
          <Wheel />
          <Wheel />
          <Wheel />
          <Wheel />
        </View>
      </View>
    </Modal>
  );
});

export default DataPicker;

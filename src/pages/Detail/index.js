import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = () => {
  const {goBack} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>hello Detail</Text>
      <Button
        title="go Back"
        onPress={() => {
          goBack();
        }}
      />
    </View>
  );
};

export default Detail;

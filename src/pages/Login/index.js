import React from 'react';
import {View, Text} from 'react-native';
import {HeaderHeightContext} from '@react-navigation/native-stack';

const Login = () => {
  return (
    <HeaderHeightContext.Consumer>
      {(headerHeight /** 你的布局代码嵌套到这里 */) => (
        <View style={{marginTop: headerHeight}}>
          <Text style={{color: '#333'}}>啦啦啦，我就在标题下方</Text>
        </View>
      )}
    </HeaderHeightContext.Consumer>
  );
};

export default Login;

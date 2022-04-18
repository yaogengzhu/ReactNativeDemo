import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HasLogin from './HasLogin';
import NotLogin from './NotLogin';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {/* 鉴权是否登陆 */}
      {isLogin && <HasLogin />}
      {!isLogin && <NotLogin />}
    </NavigationContainer>
  );
};

export default Index;

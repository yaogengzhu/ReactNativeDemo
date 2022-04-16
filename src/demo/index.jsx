/**
 * mobx 使用
 */
import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import RootStore from './store/index';
import {observer} from 'mobx-react-lite';
import myTimer from './store/index';

const TimerView = observer(props => {
  useEffect(() => {
    const timeId = setInterval(() => {
      myTimer.increaseTimer();
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  const onPressLearnMore = () => {
    myTimer.changeName('龙风');
  };
  return (
    <View>
      <Text>欢迎你: {myTimer.name}</Text>
      <Text>time: {myTimer.secondsPassed}</Text>
      <Button onPress={onPressLearnMore} title="Learn More" color="#841584" />
    </View>
  );
});

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <TimerView />
      </View>
    </SafeAreaView>
  );
};

export default App;

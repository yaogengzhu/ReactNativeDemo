import React from 'react';
import {View, Text} from 'react-native';
import {Header, ListItem, Icon} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Person = () => {
  const list = [
    {
      title: '个人信息',
      icon: 'person',
    },
    {
      title: '任职受雇信息',
      icon: 'person',
    },
    {
      title: '家庭成员信息',
      icon: 'person',
    },
  ];

  return (
    <SafeAreaProvider>
      {list.map((item, i) => (
        <ListItem
          activeScale={0.95} //
          key={i}
          bottomDivider
          onPress={() => {
            console.log('ok');
          }}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </SafeAreaProvider>
  );
};

export default Person;

import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '@rneui/themed';
import {ListItem, Icon} from '@rneui/themed';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const Person = () => {
  const list = [
    {
      title: 'Appointments',
      icon: 'send',
    },
    {
      title: 'Trips',
      icon: 'send',
    },
  ];

  return (
    <SafeAreaProvider>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
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

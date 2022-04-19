import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header, ListItem, Icon} from '@rneui/themed';

const getMenulist = () => {
  return [
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
};

const Person = props => {
  useEffect(() => {
    const {navigation} = props;

    navigation.setOptions({
      title: '个人中心',
      headerStyle: {
        // backgroundColor: 'red',
      },
    });
  }, []);

  return (
    <SafeAreaView>
      {getMenulist().map((item, i) => (
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
    </SafeAreaView>
  );
};

export default Person;

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [list] = useState(['第一', '第二', '第三', '第四']);
  const [cur, setCur] = useState('第一');

  return (
    <View style={styles.page}>
      <View style={styles.block} />
      <Text style={styles.title}>美团App</Text>
      <View style={styles.row}>
        {list.map(item => (
          <TouchableOpacity
            onPress={() => {
              setCur(item);
            }}
            style={[styles.button, cur === item ? styles.selected : '']}
            key={item}>
            <Text
              style={[styles.word, cur === item ? styles.selectedWord : '']}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <View style={[styles.boxRow]}>
          <View style={[styles.box, styles.bg1]} />
          <View style={[styles.box, styles.bg2]} />
          <View style={[styles.box, styles.bg3]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  block: {
    marginTop: 40,
  },
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
    color: '#fff',
  },
  word: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedWord: {
    color: '#fff',
  },
  box: {
    width: 50,
    height: 50,
  },
  boxRow: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'space-around',
    alignContent: 'space-around',
  },
  bg1: {
    backgroundColor: 'blue',
    // flex: 1,
    width: 'auto',
  },
  bg2: {
    backgroundColor: 'pink',
    width: '50%',
  },
  bg3: {
    backgroundColor: 'green',
    width: 'auto',
  },
});

export default App;

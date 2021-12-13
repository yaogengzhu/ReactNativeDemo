/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-13 16:08:06
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-13 17:23:04
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = Array.from({length: 10}, (i, index) => ({
  id: index + 1,
  title: index + 1,
}));
const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const renderItem = ({item}) => <Item title={item.title} />;
  const renderLine = () => <View style={styles.line} />;
  const renderHeader = () => (
    <View>
      <Text>yhell</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={false} // 设置方向
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={renderLine} // 设置下划线
        ListHeaderComponent={renderHeader}
        refreshing={refresh} // 下啦刷新
        onRefresh={() => {
          setRefresh(true);
          setTimeout(() => {
            setRefresh(false);
          }, 2000);
        }}
        onEndReached={() => {
          console.log('上啦加载');
        }}
        progressViewOffset={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  line: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
});

export default App;

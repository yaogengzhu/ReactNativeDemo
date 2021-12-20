import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://mpt-dev.bthome.com/crm/#/login'}} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

import React from 'react';
import {ScrollView, RefreshControl, StyleSheet} from 'react-native';

/**
 *
 * @param {*} props
 * refreshing  bool 视图是否应该在刷新时显示指示器。
 *
 * onRefresh func  在视图开始刷新时调用
 *
 * colors android 指定至少一种颜色用来绘制刷新指示器。
 *
 *
 *
 * @returns
 * refreshing
 */
const PullToRefefresh = props => {
  const {refreshing = false, onRefresh = () => {}, children} = props;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="red" title="刷新中" />
      }>
      {children && children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default PullToRefefresh;

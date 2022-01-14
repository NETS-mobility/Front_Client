import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import BottomTab from './bottomTab';
import WholeLayout from '../wholeLayout';

const CommonLayout = ({children}) => {
  return (
    <WholeLayout>
      <View style={styles.layout}>
        <Header />
        {children}
        <BottomTab />
      </View>
    </WholeLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default CommonLayout;

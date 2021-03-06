import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './header';
import WholeLayout from '../wholeLayout';

const CommonLayout = ({children}) => {
  return (
    <WholeLayout>
      <View style={styles.layout}>
        <Header />
        {children}
      </View>
    </WholeLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    position: 'relative',
    flex: 1,
    paddingBottom: 65,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 14,
  },
});
export default CommonLayout;

import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import BottomTab from './common/bottomTab';
const WholeLayout = ({children, num}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      {/* {num == 1 ? <></> : <BottomTab></BottomTab>} */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default WholeLayout;

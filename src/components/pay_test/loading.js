import React from 'react';
import {HStack, Spinner, Heading, NativeBaseProvider} from 'native-base';
import {View, StyleSheet} from 'react-native';

const CommonLoading = () => {
  const styles = StyleSheet.create({
    fullPage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <NativeBaseProvider>
      <View style={styles.fullPage}>
        <HStack
          space={5}
          justifyContent="center"
          alignItems="center"
          alignSelf="center">
          <Spinner accessibilityLabel="Loading posts" size="lg" />
          <Heading color="primary.500">잠시만 기다려주세요...</Heading>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};

export default CommonLoading;

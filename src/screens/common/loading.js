import React from 'react';
import {HStack, Spinner, Heading, NativeBaseProvider} from 'native-base';
import {View, StyleSheet} from 'react-native';

const Loading = () => {
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
          <Heading color="primary.500">배차 가능 여부 확인 중...</Heading>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};
export default Loading;

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';

const styles = StyleSheet.create({
  statbox: {
    width: 340,
    height: 32,
    borderColor: '#19B7CD',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },
});

const ResStatus = ({
  check11,
  check12,
  check21,
  check22,
  check31,
  check32,
  check41,
  check42,
}) => {
  const [service, setService] = useState('');

  if (
    ((check11 && check12) ||
      (check21 && check22) ||
      (check31 && check32) ||
      (!check32 && check41 && check42)) == false
  ) {
    setService('모든 질문에 답변해주세요');
  }
  return (
    <SafeAreaView>
      <View style={styles.statbox}>
        <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textMain]}>
          {service}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResStatus;

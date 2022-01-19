import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
const ServiceIndividualStep = ({style, step}) => {
  return (
    <View style={styles.step}>
      <View style={[styles.bar, style]} />
      <Text style={[typoStyles.textMain, typoStyles.fs13, typoStyles.fw700]}>
        {step}
      </Text>
    </View>
  );
};

const ServiceProgress = () => {
  return (
    <View style={styles.progress}>
      <ServiceIndividualStep style={styles.color1} step={'일정 설정'} />
      <ServiceIndividualStep style={styles.color2} step={'이용자 정보'} />
      <ServiceIndividualStep style={styles.color3} step={'내원 정보'} />
      <ServiceIndividualStep style={styles.color4} step={'결제 진행'} />
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  step: {
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    width: 75,
    height: 8,
    borderRadius: 30,
    backgroundColor: '#19b7cd',
  },
  color1: {
    opacity: 0.1,
  },
  color2: {
    opacity: 0.4,
  },
  color3: {
    opacity: 0.7,
  },
  color4: {
    opacity: 1,
  },
});

export default ServiceProgress;

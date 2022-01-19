import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

const DetailProgressCircle = ({time, text}) => {
  const styles = StyleSheet.create({
    oneStep: {
      width: '25%',
      alignItems: 'center',
    },
    bigCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#fff',
    },
    smallCircle: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#19b7cd',
    },
    text: {
      marginVertical: 8,
    },
  });

  return (
    <View style={styles.oneStep}>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {time}
      </Text>
      <View style={styles.bigCircle}>
        <View style={styles.smallCircle} />
      </View>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {text}
      </Text>
    </View>
  );
};

export const ServiceDetailProgress = () => {
  const styles = StyleSheet.create({
    title: {marginBottom: 12},
    steps: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 0,
    },
    line: {
      position: 'absolute',
      bottom: '52%',
      width: '100%',
      height: 13,
      backgroundColor: '#19B7CD',
    },
  });
  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fw700,
          typoStyles.textExplainBold,
          styles.title,
        ]}>
        진행 상황
      </Text>
      <View style={styles.steps}>
        <View style={styles.line} />
        <DetailProgressCircle time={'11:37'} text={'픽업완료'} />
        <DetailProgressCircle time={'11:48'} text={'병원도착'} />
        <DetailProgressCircle time={'12:12'} text={'귀가차량\n병원도착'} />
        <DetailProgressCircle time={'13:14'} text={'귀가출발'} />
        <DetailProgressCircle time={'13:30'} text={'서비스종료'} />
      </View>
    </ServiceBlock>
  );
};

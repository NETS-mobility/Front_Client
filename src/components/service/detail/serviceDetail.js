import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

const DetailProgressCircle = ({time, text, circleFill}) => {
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
      zIndex: 4,
    },
    smallCircleNoActive: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#dad8e0',
      zIndex: 5,
    },
    smallCircleActive: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#19b7cd',
      zIndex: 5,
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
        {circleFill ? (
          <View style={styles.smallCircleActive} />
        ) : (
          <View style={styles.smallCircleNoActive} />
        )}
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

export const ServiceDetailProgress = ({progress}) => {
  const {state, state_time} = progress;
  const GetLineFill = () => {
    let lineFill = '0%';
    if (state > 5) {
      lineFill = '100%';
    } else if (state > 4) {
      lineFill = '75%';
    } else if (state > 3) {
      lineFill = '50%';
    } else if (state > 2) {
      lineFill = '25%';
    }
    return lineFill;
  };

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
    lineGray: {
      position: 'absolute',
      bottom: '52%',
      width: '100%',
      height: 13,
      backgroundColor: '#dad8e0',
      zIndex: 2,
    },
    lineBlue: {
      position: 'absolute',
      width: GetLineFill(),
      height: 13,
      backgroundColor: '#19b7cd',
      zIndex: 3,
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
        <View style={styles.lineGray}>
          <View style={styles.lineBlue} />
        </View>

        <DetailProgressCircle
          time={
            state_time?.[2] != null ? state_time?.[2].substring(11, 16) : ''
          }
          text={'픽업완료'}
          circleFill={state > 1}
        />
        <DetailProgressCircle
          time={
            state_time?.[3] != null ? state_time?.[3].substring(11, 16) : ''
          }
          text={'병원도착'}
          circleFill={state > 2}
        />
        <DetailProgressCircle
          time={
            state_time?.[4] != null ? state_time?.[4].substring(11, 16) : ''
          }
          text={'귀가차량\n병원도착'}
          circleFill={state > 3}
        />
        <DetailProgressCircle
          time={
            state_time?.[5] != null ? state_time?.[5].substring(11, 16) : ''
          }
          text={'귀가출발'}
          circleFill={state > 4}
        />
        <DetailProgressCircle
          time={
            state_time?.[6] != null ? state_time?.[6].substring(11, 16) : ''
          }
          text={'서비스종료'}
          circleFill={state > 5}
        />
      </View>
    </ServiceBlock>
  );
};

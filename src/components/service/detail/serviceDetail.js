import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

const DetailProgressCircle = ({time, text, circleFill, count}) => {
  const GetWidth = () => {
    if (count == 4) return '33%';
    else if (count == 5) return '25%';
    else return '20%';
  };

  const styles = StyleSheet.create({
    oneStep: {
      width: GetWidth(),
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

/*
  왕복: 1~6
  집-병원: 1~3, 6
  병원-집: 1, 4~6
  
  [사용자]
  왕복 2시간 이상
  1. [차량출발, 픽업완료, 병원도착완료, 서비스 종료]
  2. [귀가차량 병원도착, 귀가출발, 서비스 종료]

  왕복 2시간 이하
  1. [차량출발, 픽업완료, 병원도착완료, 귀가출발, 서비스 종료]

  편도(집-병원)
  1. [차량출발, 픽업완료, 병원도착완료, 서비스 종료]

  편도(병원-집)
  1. [차량 출발, 귀가차량 병원도착, 귀가출발, 서비스 종료]
  */

const pickCategory = (data, pick) => {
  const categories = {
    1: ['차량출발', data?.carDep],
    2: ['픽업완료', data?.pickup],
    3: ['병원도착\n완료', data?.arrivalHos],
    4: ['귀가차량\n병원도착', data?.carReady],
    5: ['귀가출발', data?.goHome],
    6: ['서비스종료', data?.complete],
  };
  const categoryKey = Object.keys(categories);
  for (let i = 0; i < categoryKey.length; i++) {
    if (categoryKey[i] == pick) {
      return categories[categoryKey[i]];
    }
  }
};

const CaseInfo = dispatchCase => {
  switch (dispatchCase) {
    case 1: //집-병원
      return [1, 2, 3, 6];
    case 2: //병원-집
      return [1, 4, 5, 6];
    case 3: //집-집(2시간 이하)
      return [1, 2, 3, 5, 6];
    case 4: //집-집(2시간 이상)
      return [1, 2, 3, 4, 5, 6];
  }
};

export const ServiceDetailProgress = ({progress}) => {
  const {state, state_time, dispatch_case} = progress;
  const infos = CaseInfo(dispatch_case);
  console.log(progress);
  console.log(infos);

  const GetLineFill = num => {
    let lineFill = '0%';
    if (num == 4) {
      if (dispatch_case == 1) {
        if (state > 6) {
          lineFill = '122%';
        } else if (state > 3) {
          lineFill = '99%';
        } else if (state > 2) {
          lineFill = '66%';
        } else if (state > 1) {
          lineFill = '33%';
        }
      } else {
        if (state > 6) {
          lineFill = '122%';
        } else if (state > 5) {
          lineFill = '99%';
        } else if (state > 4) {
          lineFill = '66%';
        } else if (state > 1) {
          lineFill = '33%';
        }
      }
    } else if (num == 6) {
      if (state > 5) {
        lineFill = '125%';
      } else if (state > 5) {
        lineFill = '100%';
      } else if (state > 3) {
        lineFill = '75%';
      } else if (state > 2) {
        lineFill = '50%';
      } else if (state > 1) {
        lineFill = '25%';
      }
    } else {
      if (state > 6) {
        lineFill = '100%';
      } else if (state > 5) {
        lineFill = '83%';
      } else if (state > 4) {
        lineFill = '67%';
      } else if (state > 3) {
        lineFill = '50%';
      } else if (state > 2) {
        lineFill = '33%';
      } else if (state > 1) {
        lineFill = '17%';
      }
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
    lineBlue4: {
      position: 'absolute',
      width: GetLineFill(4),
      height: 13,
      backgroundColor: '#19b7cd',
      zIndex: 3,
    },
    lineBlue5: {
      position: 'absolute',
      width: GetLineFill(5),
      height: 13,
      backgroundColor: '#19b7cd',
      zIndex: 3,
    },
    lineBlue6: {
      position: 'absolute',
      width: GetLineFill(6),
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
          {infos?.length == 4 ? (
            <View style={styles.lineBlue4} />
          ) : infos?.length == 5 ? (
            <View style={styles.lineBlue5} />
          ) : (
            <View style={styles.lineBlue6} />
          )}
        </View>
        {infos?.map((data, i) => {
          const result = pickCategory(state_time, data);
          return (
            <DetailProgressCircle
              time={result[1]?.substring(11, 16)}
              text={result[0]}
              circleFill={state > i}
              count={infos?.length}
            />
          );
        })}
      </View>
    </ServiceBlock>
  );
};

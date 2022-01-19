import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {btnStyles} from '../../../assets/fonts/button';
import typoStyles from '../../../assets/fonts/typography';
import {ServiceInfo} from '../reservation/serviceInfo';
import ServiceBlock from '../serviceBlock';

export const ServiceStatus = ({text}) => {
  const styles = StyleSheet.create({
    btn: {
      width: 130,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 30,
    },
    whiteBtn: {
      backgroundColor: '#fff',
      borderColor: '#19b7cd',
    },
    greyBtn: {
      backgroundColor: '#fff',
      borderColor: '#737373',
    },
  });
  return text == '서비스 종료' ? (
    <View style={[styles.greyBtn, styles.btn]}>
      <Text style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textExplain]}>
        {text}
      </Text>
    </View>
  ) : (
    <View style={[styles.whiteBtn, styles.btn]}>
      <Text style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textMain]}>
        {text}
      </Text>
    </View>
  );
};

export const ServiceHistoryBlock = ({date, type, goNext}) => {
  const styles = StyleSheet.create({
    serviceType: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    date: {
      width: '50%',
    },
    btnSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 23,
    },
    detailBtn: {
      width: 130,
      height: 30,
    },
  });
  return (
    <ServiceBlock>
      <View style={styles.serviceType}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
            styles.date,
          ]}>
          {date}
        </Text>
        <Text style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textMain]}>
          {type}
        </Text>
      </View>
      <ServiceInfo num={1} />

      <View style={styles.btnSection}>
        {/* <ServiceStatus text={'서비스 종료'} /> */}
        <ServiceStatus text={'서비스 진행 중'} />
        <TouchableOpacity
          style={[btnStyles.btnBlue, styles.detailBtn]}
          onPress={goNext}>
          <Text
            style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textWhite]}>
            상세보기
          </Text>
        </TouchableOpacity>
      </View>
    </ServiceBlock>
  );
};

import React from 'react';
import CommonLayout from '../common/layout';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {ServiceInfo} from './payment/resComplete';
import ServiceBlock from './serviceBlock';
import {btnStyles} from '../../assets/fonts/button';

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
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {text}
      </Text>
    </View>
  ) : (
    <View style={[styles.whiteBtn, styles.btn]}>
      <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textMain]}>
        {text}
      </Text>
    </View>
  );
};

const ServiceInfoStatus = ({date, type}) => {
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
            typoStyles.fwBold,
            typoStyles.textExplainBold,
            styles.date,
          ]}>
          {date}
        </Text>
        <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textMain]}>
          {type}
        </Text>
      </View>
      <ServiceInfo />

      <View style={styles.btnSection}>
        {/* <ServiceStatus text={'서비스 종료'} /> */}
        <ServiceStatus text={'서비스 진행 중'} />
        <TouchableOpacity style={[btnStyles.btnBlue, styles.detailBtn]}>
          <Text
            style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>
            상세보기
          </Text>
        </TouchableOpacity>
      </View>
    </ServiceBlock>
  );
};

const ServiceHistory = () => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 12},
    selectSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    selectBtn: {
      width: '48%',
      alignItems: 'center',
    },
    selectBar: {
      width: '100%',
      height: 8,
      borderRadius: 30,
      marginTop: 5,
    },
    active: {backgroundColor: '#19B7CD'},
    nonActive: {
      backgroundColor: '#DAD8E0',
    },
  });
  return (
    <CommonLayout>
      <View style={styles.block1}>
        <Text
          style={[
            typoStyles.fs32,
            typoStyles.textMain,
            typoStyles.fwBold,
            styles.title,
          ]}>
          서비스 내역
        </Text>
        <View style={styles.selectSection}>
          <TouchableOpacity style={styles.selectBtn}>
            <Text
              style={[typoStyles.fs13, typoStyles.fwBold, typoStyles.textMain]}>
              진행 내역
            </Text>
            <View style={[styles.selectBar, styles.active]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectBtn}>
            <Text
              style={[
                typoStyles.fs13,
                typoStyles.fwBold,
                typoStyles.textDisable,
              ]}>
              완료 내역
            </Text>
            <View style={[styles.selectBar, styles.nonActive]} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ServiceInfoStatus date={'2021.10.20'} type={'네츠 휠체어 플러스'} />
      </View>
    </CommonLayout>
  );
};
export default ServiceHistory;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceHistoryBlock} from '../../../components/service/detail/serviceHistory';

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
      <ScrollView>
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
                style={[
                  typoStyles.fs13,
                  typoStyles.fwBold,
                  typoStyles.textMain,
                ]}>
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
          <ServiceHistoryBlock
            date={'2021.10.20'}
            type={'네츠 휠체어 플러스'}
          />
          <ServiceHistoryBlock
            date={'2021.10.22'}
            type={'네츠 휠체어 플러스'}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};
export default ServiceHistory;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceHistoryBlock} from '../../../components/service/detail/serviceHistoryComponent';
import GetServiceList from '../../../api/reservation/serviceList';

const ServiceHistory = ({navigation}) => {
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

  const [ing, setIng] = useState(true);
  const [serviceIng, setServiceIng] = useState([]);
  const [serviceComp, setServiceComp] = useState([]);

  const GetServiceLists = async () => {
    setServiceIng(await GetServiceList(0));
    setServiceComp(await GetServiceList(1));
  };

  useEffect(() => {
    GetServiceLists();
  }, []);

  return (
    <CommonLayout>
      <ScrollView>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.textMain,
              typoStyles.fw700,
              styles.title,
            ]}>
            서비스 내역
          </Text>
          <View style={styles.selectSection}>
            <TouchableOpacity
              style={styles.selectBtn}
              onPress={() => setIng(true)}>
              <Text
                style={[
                  typoStyles.fs13,
                  typoStyles.fw700,
                  ing ? typoStyles.textMain : typoStyles.textDisable,
                ]}>
                진행 내역
              </Text>
              <View
                style={[
                  styles.selectBar,
                  ing ? styles.active : styles.nonActive,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectBtn}
              onPress={() => setIng(false)}>
              <Text
                style={[
                  typoStyles.fs13,
                  typoStyles.fw700,
                  ing ? typoStyles.textDisable : typoStyles.textMain,
                ]}>
                완료 내역
              </Text>
              <View
                style={[
                  styles.selectBar,
                  ing ? styles.nonActive : styles.active,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {ing ? (
            serviceIng != [] &&
            serviceIng?.map((data, i) => {
              const {dispatch, ...filteredData} = data;
              const detailId = data.service_id;
              return (
                <ServiceHistoryBlock
                  data={filteredData}
                  dispatch={dispatch}
                  goNext={() =>
                    navigation.navigate(`ServiceDetail`, {detailId})
                  }
                />
              );
            })
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </CommonLayout>
  );
};
export default ServiceHistory;

import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import {btnStyles} from '../../../components/common/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {NextBtn} from '../../../components/service/reservation/serviceBtn';
import ServiceProgress from '../../../components/service/reservation/progress';
import {
  ResDate,
  GetAddr,
  GetTime,
} from '../../../components/service/reservation/reservation01';
import CustomBtn from '../../../components/common/button';

const styles = StyleSheet.create({
  background: {
    // backgroundColor: 'white',
    flex: 1,
  },
  step1title: {
    marginBottom: 7,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    marginBottom: 22,
  },
  proset: {
    alignItems: 'center',
  },
  textline: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  pickbox: {
    marginTop: 30,
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
});

const Reservation01 = ({route, navigation}) => {
  const {serviceKindID, serviceName} = route.params;
  const {way} = route.params;
  const {moveDirection} = route.params;

  const [dis, setDis] = useState(true);
  const [resTimes, setResTimes] = useState({
    resResTime: '0',
    resArrTime: '0',
    resDepTime: '0',
  });
  const [resAddrs, setResAddrs] = useState({
    hospitalAddr: '0',
    homeAddr: '0',
    dropAddr: '0',
  });
  const [resDate, setResDate] = useState('0');
  console.log('res01==', serviceKindID);

  useEffect(() => {
    if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
      if (
        resAddrs.homeAddr != '0' &&
        resAddrs.hospitalAddr != '0' &&
        resAddrs.dropAddr != '0' &&
        resTimes.resArrTime != '0' &&
        resTimes.resResTime != '0' &&
        resTimes.resDepTime != '0'
      ) {
        setDis(false);
      }
    } else if (
      serviceName == '네츠 휠체어 플러스 편도 서비스' ||
      '네츠 휠체어 편도 서비스'
    ) {
      if (way) {
        if (
          resAddrs.homeAddr != '0' &&
          resAddrs.hospitalAddr != '0' &&
          resTimes.resArrTime != '0' &&
          resTimes.resResTime != '0'
        ) {
          setDis(false);
        }
      } else {
        if (
          resAddrs.dropAddr != '0' &&
          resAddrs.hospitalAddr != '0' &&
          resTimes.resDepTime != '0'
        ) {
          setDis(false);
        }
      }
    }
    console.log(resAddrs, resTimes);
  }, [resAddrs, resTimes]);

  return (
    <CommonLayout>
      <ScrollView style={styles.background}>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
              styles.title,
            ]}>
            서비스예약
          </Text>
          <ServiceProgress num={1} />
        </View>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP1. 장소 설정
          </Text>
          <GetAddr
            serviceName={serviceName}
            way={way}
            addr={resAddrs}
            setAddr={setResAddrs}
          />
        </ServiceBlock>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP2. 일정 설정
          </Text>
          <ResDate setDate={setResDate} />
          <GetTime
            serviceName={serviceName}
            way={way}
            time={resTimes}
            setTime={setResTimes}
          />
        </ServiceBlock>
        <View style={styles.btn}>
          <NextBtn
            navWhere={() => {
              navigation.push('Reservation02', {
                serviceKindId: serviceKindID,
                moveDirection: moveDirection,
                resAddrs: resAddrs,
                resDate: resDate,
                resTimes: resTimes,
              });
            }}
            disable={dis}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default Reservation01;

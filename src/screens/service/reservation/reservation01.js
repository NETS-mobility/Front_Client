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
import ReservationTimeChange from '../../../components/service/reservation/reservationTimeChange';
import {ServiceInputBoxWithoutBtn} from '../../../components/service/reservation/serviceInputBox';
import {ServiceGowithPicker} from '../../../components/service/reservation/servicePicker';

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
    resResTime: {time: '0', timetype: '', hour: '', min: ''},
    resArrTime: {time: '0', timetype: '', hour: '', min: ''},
    resDepTime: {time: '0', timetype: '', hour: '', min: ''},
  });

  const [resAddrs, setResAddrs] = useState({
    hospitalAddr: '0',
    homeAddr: '0',
    dropAddr: '0',
  });
  const [resDate, setResDate] = useState('0');
  const [gowithtime, setGowithtime] = useState(-1);

  useEffect(() => {
    const Test = async () => {
      if (resTimes.resResTime.time != '0' && resTimes.resArrTime.time != '0') {
        const compResTime = new Date();
        const compArrivalTime = new Date();
        const testResTime = resTimes.resResTime.time;
        const testArrTime = resTimes.resArrTime.time;
        compResTime.setHours(
          testResTime.substring(0, 2),
          testResTime.substring(3, 5),
          testResTime.substring(6, 8),
        );
        compArrivalTime.setHours(
          testArrTime.substring(0, 2),
          testArrTime.substring(3, 5),
          testArrTime.substring(6, 8),
        );
        if (compArrivalTime >= compResTime) {
          setDis(true);
        } else {
          setDis(false);
        }
      }
    };

    if (serviceName == '네츠 휠체어 플러스 왕복 서비스') {
      if (
        resAddrs.homeAddr != '0' &&
        resAddrs.hospitalAddr != '0' &&
        resAddrs.dropAddr != '0' &&
        resTimes.resArrTime.time != '0' &&
        resTimes.resResTime.time != '0' &&
        resTimes.resDepTime.time != '0'
      ) {
        setDis(false);
      } else setDis(true);
    } else if (
      serviceName == '네츠 휠체어 플러스 편도 서비스' ||
      '네츠 휠체어 편도 서비스'
    ) {
      if (way) {
        if (
          resAddrs.homeAddr != '0' &&
          resAddrs.hospitalAddr != '0' &&
          resTimes.resArrTime.time != '0' &&
          resTimes.resResTime.time != '0'
        ) {
          setDis(false);
        } else setDis(true);
      } else {
        if (
          resAddrs.dropAddr != '0' &&
          resAddrs.hospitalAddr != '0' &&
          resTimes.resDepTime.time != '0'
        ) {
          setDis(false);
        } else setDis(true);
      }
    }

    if (!dis) {
      Test();
    }
  }, [resAddrs, resTimes]);

  useEffect(() => {
    ReservationTimeChange(resTimes, setResTimes, resDate, setResDate);
  }, [resTimes.resResTime.time]);

  useEffect(() => {
    const arrTimeForComp = new Date(`${resDate}T${resTimes.resArrTime.time}`);
    const resTimeForComp = new Date(`${resDate}T${resTimes.resResTime.time}`);
    if (resTimeForComp.getTime() < arrTimeForComp.getTime() + 20 * 60000) {
      setDis(true);
    } else {
      setDis(false);
    }
  }, [resTimes.resArrTime.time]);

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
          {resDate == '--' ? (
            <></>
          ) : (
            <>
              <GetTime
                serviceName={serviceName}
                way={way}
                time={resTimes}
                setTime={setResTimes}
                setDis={setDis}
                gowithTime={gowithtime}
                setGowithTime={setGowithtime}
              />
            </>
          )}
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
                gowithHospitalTime: gowithtime,
              });
            }}
            disable={dis}
            text={'다음단계'}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default Reservation01;

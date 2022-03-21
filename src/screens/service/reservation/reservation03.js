import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {
  NextBtn,
  CheckBtn,
} from '../../../components/service/reservation/serviceBtn';
import {ServiceInputBoxWithoutBtn} from '../../../components/service/reservation/serviceInputBox';
import ServiceProgress from '../../../components/service/reservation/progress';
import ReservationAPI from '../../../api/reservation/reservation';
import {GetToken} from '../../../utils/controlToken';
import GeoCoding from '../../../utils/geocoding';
import DispatchAPI from '../../../api/dispatch/dispatch';

const styles = StyleSheet.create({
  title: {
    marginBottom: 22,
  },
  proset: {
    alignItems: 'center',
    marginTop: 10,
  },
  checkset: {
    height: 150,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  subbtn: {
    width: 219,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  background: {
    flex: 1,
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
});

const Reservation03 = ({route, navigation}) => {
  const {
    serviceKindId,
    moveDirection,
    resAddrs,
    resDate,
    resTimes,
    guardInfo,
    userInfo,
    validTargetKind,
    gowithHospitalTime,
  } = route.params;
  console.log('moveDirection==', moveDirection);

  const [diagnosis, setDiagnosis] = useState('');
  const [etc, setEtc] = useState('');
  const [disable, setDisable] = useState(true);
  const [check, setCheck] = useState([false, false, false, false, false]);
  const [result, setResult] = useState('');
  const checkStaticString = [
    '진료실 동행',
    '진료 내용 전달',
    '진료 서류 전달',
    '약국 동행',
    '기타',
  ];
  let checkString = '';

  const [xy, setXY] = useState({
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 0,
    drop_y: 0,
    hos_x: 0,
    hos_y: 0,
  });

  const GetXY = async (addr, prop) => {
    await GeoCoding(addr).then(res => {
      const prop_x = `${prop}_x`;
      const prop_y = `${prop}_y`;
      setXY(prev => ({...prev, [prop_x]: res.x, [prop_y]: res.y}));
    });
  };

  useEffect(() => {
    if (resAddrs.homeAddr != '0') {
      GetXY(resAddrs.homeAddr, 'pickup');
    }
    if (resAddrs.hospitalAddr != '0') {
      GetXY(resAddrs.hospitalAddr, 'hos');
    }
    if (resAddrs.dropAddr != '0') {
      GetXY(resAddrs.dropAddr, 'drop');
    }
  }, []);

  useEffect(() => {
    console.log('xy==', xy);
  }, [xy]);

  useEffect(() => {
    if (result != '' && diagnosis != '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [result, diagnosis]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      if (check[i]) {
        checkString += checkStaticString[i] + ',';
      }
      if (i == 4) {
        if (checkString[checkString.length - 1] == ',') {
          setResult(checkString.substring(0, checkString.length - 1));
        } else {
          setResult('');
        }
      }
    }
  }, [check]);

  useEffect(() => {
    console.log('result===', result);
  }, [result]);
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
          <ServiceProgress num={3} />
        </View>
        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fwBold,
              typoStyles.textMain,
              styles.step1title,
            ]}>
            STEP1. 내원 정보
          </Text>
          <ServiceInputBoxWithoutBtn
            title={'예약된 진료/검사 내용을 입력해주세요.'}
            place1={'진료/검사 내용'}
            Text1={diagnosis}
            setText1={setDiagnosis}
          />
          <View style={styles.checkset}>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              어떤 서비스가 필요하신지 선택해주세요.
            </Text>
            <CheckBtn
              num={0}
              check={check}
              setCheck={setCheck}
              contents={'진료실 동행'}
            />
            <CheckBtn
              num={1}
              check={check}
              setCheck={setCheck}
              contents={'지정한 보호자에게 진료 내용 전달'}
            />
            <CheckBtn
              num={2}
              check={check}
              setCheck={setCheck}
              contents={'진료 관련 서류 촬영 후 지정한 보호자에게 전달'}
            />
            <CheckBtn
              num={3}
              check={check}
              setCheck={setCheck}
              contents={'약국 동행'}
            />
            <CheckBtn
              num={4}
              check={check}
              setCheck={setCheck}
              contents={'기타 서비스'}
            />
          </View>
          {check[4] == true ? (
            <ServiceInputBoxWithoutBtn
              title={'없음'}
              place1={'입력'}
              Text1={etc}
              setText1={setEtc}
            />
          ) : (
            <></>
          )}
        </ServiceBlock>
        <View style={styles.proset}>
          <NextBtn
            text={'배차 가능 여부 확인하기'}
            navWhere={async () => {
              const res = await DispatchAPI({
                revData: {
                  pickup: resAddrs.homeAddr,
                  hos: resAddrs.hospitalAddr,
                  drop: resAddrs.dropAddr,
                  dire: moveDirection,
                  pickup_x: xy.pickup_x,
                  pickup_y: xy.pickup_y,
                  drop_x: xy.drop_x,
                  drop_y: xy.drop_y,
                  hos_x: xy.hos_x,
                  hos_y: xy.hos_y,
                  old_hos_arr_time: resTimes.resArrTime.time,
                  old_hos_dep_time: resTimes.resDepTime.time,
                  rev_date: resDate,
                  gowithHospitalTime: 20,
                  service_kind_id: serviceKindId,
                },
              }).then(response => response);
              console.log('배차성공?', res);
              navigation.push('Reservation04', {
                jwtToken: await GetToken(),
                serviceKindId: serviceKindId,
                moveDirection: moveDirection,
                gowithHospitalTime: 160, //바꿔야댐
                pickupAddr: resAddrs.homeAddr,
                dropAddr: resAddrs.dropAddr,
                hospitalAddr: resAddrs.hospitalAddr,
                hopeReservationDate: resDate,
                hopeHospitalArrivalTime: resTimes.resArrTime.time,
                fixedMedicalTime: resTimes.resResTime.time,
                hopeHospitalDepartureTime: resTimes.resDepTime.time,
                fixedMedicalDetail: diagnosis,
                hopeRequires: result,
                patientName: userInfo.name,
                patientPhone: userInfo.phone,
                protectorName: guardInfo.name,
                protectorPhone: guardInfo.phone,
                validTargetKind: validTargetKind,
                dispatch: res,
              });
            }}
            disable={disable}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default Reservation03;

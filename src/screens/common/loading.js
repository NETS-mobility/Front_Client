import React, {useEffect} from 'react';
import {HStack, Spinner, Heading, NativeBaseProvider} from 'native-base';
import {View, StyleSheet} from 'react-native';
import DispatchAPI from '../../api/dispatch/dispatch';
import {GetToken} from '../../utils/controlToken';
import PreventBack from '../../utils/preventBack';
import {useFocusEffect} from '@react-navigation/native';

const Loading = ({route, navigation}) => {
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
    hosName,
    xy,
    diagnosis,
    result,
  } = route.params;

  const styles = StyleSheet.create({
    fullPage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  useFocusEffect(PreventBack);

  const dispatch = async () => {
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
        gowithHospitalTime: gowithHospitalTime,
        service_kind_id: serviceKindId,
      },
    }).then(response => response);
    navigation.navigate('Reservation04', {
      jwtToken: await GetToken(),
      serviceKindId: serviceKindId,
      moveDirection: moveDirection,
      gowithHospitalTime: gowithHospitalTime, //바꿔야댐
      hospitalName: hosName,
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
  };

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.fullPage}>
        <HStack
          space={5}
          justifyContent="center"
          alignItems="center"
          alignSelf="center">
          <Spinner accessibilityLabel="Loading posts" size="lg" />
          <Heading color="primary.500">배차 가능 여부 확인 중...</Heading>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};
export default Loading;

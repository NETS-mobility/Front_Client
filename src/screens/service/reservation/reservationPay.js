import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles, shadowStyles} from '../../../components/common/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {
  Step1,
  Step2,
  Step3,
} from '../../../components/service/reservation/reservationPay';

const ReservationPay = ({navigation}) => {
  const [method, setMethod] = useState('card');
  const data = {
    params: {
      pg: 'kcp',
      pay_method: method,
      currency: undefined,
      notice_url: undefined,
      display: undefined,
      merchant_uid: `mid_${reservation_id}`,
      name: `${service_type}`,
      amount: `${base_cost}`,
      app_scheme: 'exampleforrn',
      tax_free: true,
      buyer_name: `${name}`,
      buyer_tel: `${phone}`,
      buyer_email: buyerEmail,
      buyer_addr: undefined,
      buyer_postcode: undefined,
      custom_data: undefined,
      vbank_due: undefined,
      popup: undefined,
      digital: undefined,
      language: undefined,
      biz_num: undefined,
      customer_uid: undefined,
      naverPopupMode: undefined,
      naverUseCfm: undefined,
      naverProducts: undefined,
      m_redirect_url: IMPConst.M_REDIRECT_URL,
      escrow,
    },
    tierCode,
  };

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
            결제하기
          </Text>
          <TouchableOpacity
            style={[btnStyles.btnBlue, styles.checkBtn, shadowStyles.shadow]}>
            <Text
              style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw700]}>
              서비스 요금 확인하기
            </Text>
          </TouchableOpacity>
        </View>

        <Step1 />
        <Step2 />
        <Step3 />
        <TouchableOpacity
          style={[btnStyles.btnBlue, styles.btn]}
          onPress={() => navigation.push('Payment', data)}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            결제
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#02931f',
  },
  block1: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 22,
  },
  title2: {
    marginBottom: 8,
  },
  explain1: {marginBottom: 7},
  explain2: {marginTop: 5, marginBottom: 11},
  btn: {width: 300, height: 47, alignSelf: 'center', marginTop: 31},
  btn2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBtn: {
    alignSelf: 'center',
    width: 300,
    height: 30,
  },
});

export default ReservationPay;

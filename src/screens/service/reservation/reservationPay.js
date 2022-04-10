import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomBtn, {
  btnStyles,
  shadowStyles,
} from '../../../components/common/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {
  Step1,
  Step2,
  Step3,
} from '../../../components/service/reservation/reservationPay';
import {GetPayInfo} from '../../../api/payment/GetPayInfo';
import {IMPConst} from 'iamport-react-native';

const ReservationPay = ({navigation, route}) => {
  const {reservationId} = route.params;
  const [method, setMethod] = useState('');
  const [iamport, setIamport] = useState();
  const [dis1, setDis1] = useState(true);
  const [dis2, setDis2] = useState(true);

  const GetIamportInfo = async () => {
    setIamport(await GetPayInfo(reservationId));
  };

  useEffect(() => {
    GetIamportInfo();
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

        <Step1 setMethod={setMethod} setDis={setDis1} />
        <Step2 id={reservationId} />
        <Step3 setDis={setDis2} />
        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.btn]}
          viewStyleDisabled={[btnStyles.btnDisable, styles.btn]}
          text={'결제'}
          textStyle={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}
          textStyleDisabled={[
            typoStyles.fs20,
            typoStyles.fw700,
            typoStyles.textWhite,
          ]}
          disabled={dis1 || dis2}
          onPress={() => {
            const data = {
              params: {
                display: {
                  card_quota: iamport.cardQuota,
                },
                pg: 'kcp.A52CY',
                pay_method: method,
                currency: undefined,
                notice_url: undefined,
                display: undefined,
                merchant_uid: iamport.merchantUid,
                name: iamport.name,
                amount: iamport.amount,
                app_scheme: 'exampleforrn',
                tax_free: true,
                buyer_name: iamport.buyerName,
                buyer_tel: iamport.buyerTel,
                buyer_email: iamport.buyerEmail,
                buyer_addr: undefined,
                buyer_postcode: undefined,
                custom_data: undefined,
                vbank_due: iamport.vbankDue,
                popup: undefined,
                digital: undefined,
                language: undefined,
                biz_num: undefined,
                customer_uid: undefined,
                naverPopupMode: undefined,
                naverUseCfm: undefined,
                naverProducts: undefined,
                m_redirect_url: IMPConst.M_REDIRECT_URL,
                escrow: undefined,
              },
              tierCode: undefined,
            };
            navigation.push('Payment', {data: data});
          }}></CustomBtn>
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

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomBtn, {btnStyles} from '../../../components/common/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {AdditionalPayment} from '../../../components/service/payment/additionalPayment';
import {
  Step1,
  Step2,
} from '../../../components/service/reservation/reservationPay';
import GetExtraCost from '../../../api/payment/GetExtraCost';
import {IMPConst} from 'iamport-react-native';
import {GetPayInfo} from '../../../api/payment/GetPayInfo';

const AdditionalPay = ({navigation, route}) => {
  const {reservationId} = route.params;
  const [method, setMethod] = useState('');
  const [iamport, setIamport] = useState();
  const [dis1, setDis1] = useState(true);

  const GetIamportInfo = async () => {
    setIamport(await GetPayInfo(reservationId));
  };

  useEffect(() => {
    GetIamportInfo();
  }, []);

  const styles = StyleSheet.create({
    block: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: 40,
    },
    btn: {
      width: '80%',
      height: 47,
      alignSelf: 'center',
      marginTop: 24,
    },
  });
  return (
    <CommonLayout>
      <ScrollView>
        <View style={styles.block}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.fw700,
              typoStyles.textMain,
              styles.title,
            ]}>
            추가 요금 결제
          </Text>
        </View>
        <Step1 setMethod={setMethod} setDis={setDis1} />
        <Step2 additional={true} id={reservationId} />
        <TouchableOpacity style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            결제
          </Text>
        </TouchableOpacity>
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
          disabled={dis1}
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
          }}
        />
      </ScrollView>
    </CommonLayout>
  );
};

export default AdditionalPay;

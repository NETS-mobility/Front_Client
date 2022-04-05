import React from 'react';
import IMP from 'iamport-react-native';
import {getUserCode} from '../../components/pay_test/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loading from '../../components/pay_test/loading';

const Payment = ({route, navigation}) => {
  const params = route.params?.params;
  const tierCode = route.params?.tierCode;
  const userCode = getUserCode(params.pg, tierCode);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <IMP.Payment
        userCode={userCode}
        tierCode={tierCode}
        loading={<Loading />}
        data={params}
        callback={response => navigation.replace('PaymentResultTest', response)}
      />
    </SafeAreaView>
  );
};

export default Payment;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import CustomBtn, {btnStyles} from '../../../components/common/button';
import {
  ChangeInput,
  ChangeInputWithBtn,
} from '../../../components/mypage/changeInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckEmailDupAPI from '../../../api/mypage/checkEmailDup';
import ChangeUserInfo from '../../../api/mypage/changeUserInfo';
import CheckPhoneAPI from '../../../api/signup/checkPhone';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 30,
    marginBottom: 30,
  },
  dupMsg: {
    textAlign: 'center',
    marginBottom: 5,
  },
  setcenter: {
    alignItems: 'center',
  },
  savebtn: {
    width: 300,
    height: 47,
  },
  successMsg: {
    marginBottom: 20,
  },
  wrapbtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

const ChangeInfo = ({route}) => {
  const {data} = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(0);
  const [disable, setDisable] = useState(true);
  const [succeed, setSucceed] = useState(0);
  const [authNum, setAuthNum] = useState('');
  const [authAnswer, setAuthAnswer] = useState('');

  useEffect(() => {
    setName(data.name);
    setEmail(data.id);
    setPhone(data.phone);
  }, [data]);

  useEffect(() => {
    if (
      name != '' &&
      email != '' &&
      phone != '' &&
      emailAvailable == 2 &&
      authNum == authAnswer &&
      authAnswer != ''
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, email, phone, emailAvailable]);

  useEffect(() => {
    if (emailAvailable == 2) {
      setEmailAvailable(0);
    }
  }, [email]);

  return (
    <CommonLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.background}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={false}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            ???????????????
          </Text>
        </View>
        <View style={styles.setcenter}>
          <ChangeInput
            title={'??????'}
            place1={'??????'}
            Text1={name}
            setText1={setName}
          />
          <ChangeInputWithBtn
            title={'?????????'}
            place1={'?????????'}
            Text1={email}
            setText1={setEmail}
            btntext={'????????????'}
            onPress={() => CheckEmailDupAPI(email, setEmailAvailable)}
          />

          <Text
            style={[
              styles.dupMsg,
              typoStyles.fs16,
              typoStyles.fwBold,
              styles.successMsg,
              emailAvailable == 0 || emailAvailable == 1
                ? typoStyles.textPrimary
                : typoStyles.textMain,
            ]}>
            {emailAvailable == 0
              ? '????????? ?????? ????????? ??????????????????'
              : emailAvailable == 1
              ? '???????????? ??????????????????.'
              : '?????? ????????? ??????????????????.'}
          </Text>

          <ChangeInputWithBtn
            title={'????????????'}
            place1={'????????????'}
            Text1={phone}
            setText1={setPhone}
            btntext={'??????????????????'}
            onPress={() => {
              CheckPhoneAPI({phone: phone}, setAuthAnswer);
            }}
          />
          <ChangeInput
            title={'????????????'}
            place1={'????????????'}
            Text1={authNum}
            setText1={setAuthNum}
          />

          <Text
            style={[
              styles.dupMsg,
              typoStyles.fs16,
              typoStyles.fwBold,
              styles.successMsg,
              authAnswer != authNum || authAnswer == ''
                ? typoStyles.textPrimary
                : typoStyles.textMain,
            ]}>
            {authAnswer == ''
              ? '????????? ????????? ??????????????????'
              : authAnswer != authNum
              ? '??????????????? ???????????? ????????????.'
              : '????????? ?????????????????????.'}
          </Text>
        </View>

        <View style={styles.wrapbtn}>
          <Text
            style={[
              typoStyles.fs20,
              typoStyles.fwBold,
              styles.successMsg,
              succeed == 1 ? typoStyles.textPrimary : typoStyles.textMain,
            ]}>
            {succeed == 0
              ? ''
              : succeed == 1
              ? '??????????????? ???????????? ???????????????. ??????????????? ???????????????.'
              : '??????????????? ?????????????????????.'}
          </Text>
          <CustomBtn
            viewStyle={[btnStyles.btnBlue, styles.savebtn]}
            textStyle={[
              typoStyles.fs20,
              typoStyles.fwBold,
              typoStyles.textWhite,
            ]}
            viewStyleDisabled={[btnStyles.btnDisable, styles.savebtn]}
            textStyleDisabled={[
              typoStyles.fs20,
              typoStyles.fwBold,
              typoStyles.textWhite,
            ]}
            text={'?????? ?????? ??????'}
            onPress={() => ChangeUserInfo(name, email, phone, setSucceed)}
            disabled={disable}
          />
        </View>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default ChangeInfo;

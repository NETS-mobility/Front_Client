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

  useEffect(() => {
    setName(data.name);
    setEmail(data.id);
    setPhone(data.phone);
  }, [data]);

  useEffect(() => {
    if (name != '' && email != '' && phone != '' && emailAvailable == 2) {
      setDisable(false);
    }
  }, [name, email, phone, emailAvailable]);

  return (
    <CommonLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.background}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={false}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            마이페이지
          </Text>
        </View>
        <View style={styles.setcenter}>
          <ChangeInput
            title={'이름'}
            place1={'이름'}
            Text1={name}
            setText1={setName}
          />
          <ChangeInputWithBtn
            title={'이메일'}
            place1={'이메일'}
            Text1={email}
            setText1={setEmail}
            btntext={'중복확인'}
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
              ? '이메일 중복 확인을 진행해주세요'
              : emailAvailable == 1
              ? '중복되는 이메일입니다.'
              : '사용 가능한 이메일입니다.'}
          </Text>

          <ChangeInputWithBtn
            title={'휴대전화'}
            place1={'휴대전화'}
            Text1={phone}
            setText1={setPhone}
            btntext={'중복확인'}
          />
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
              ? '정상적으로 수정되지 않았습니다. 고객센터에 문의하세요.'
              : '정상적으로 수정되었습니다.'}
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
            text={'변경 정보 저장'}
            onPress={() => ChangeUserInfo(name, email, phone, setSucceed)}
            disabled={disable}
          />
        </View>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default ChangeInfo;

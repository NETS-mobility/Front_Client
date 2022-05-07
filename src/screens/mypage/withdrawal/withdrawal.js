import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import CustomBtn, {btnStyles} from '../../../components/common/button';
import {ChangeInput} from '../../../components/mypage/changeInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WithdrawalAPI from '../../../api/mypage/withdrawal';
import {NavigationContainer} from '@react-navigation/native';
import {DeleteToken} from '../../../utils/controlToken';
import {RefreshContext} from '../../../../App';

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

const Withdrawal = ({navigation}) => {
  const {refresh, setRefresh} = useContext(RefreshContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reason, setReason] = useState('');
  const [disable, setDisable] = useState(true);
  const [errmsg, setErrmsg] = useState('이메일과 비밀번호를 입력해주세요.');
  useEffect(() => {
    if (email != '' && password != '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  return (
    <CommonLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.background}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={false}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            회원탈퇴
          </Text>
        </View>
        <View style={styles.setcenter}>
          <ChangeInput
            title={'이메일'}
            place1={'이메일'}
            Text1={email}
            setText1={setEmail}
          />
          <ChangeInput
            title={'비밀번호'}
            place1={'비밀번호'}
            Text1={password}
            setText1={setPassword}
            isPass={true}
          />
          <ChangeInput
            title={'탈퇴사유'}
            place1={'탈퇴사유'}
            Text1={reason}
            setText1={setReason}
          />
        </View>

        <View style={styles.wrapbtn}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwBold,
              styles.successMsg,
              typoStyles.textPrimary,
            ]}>
            {errmsg}
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
            text={'탈퇴하기'}
            onPress={async () => {
              const res = await WithdrawalAPI(email, password, reason);
              console.log('res', res.status);
              if (res.status === 200) {
                Alert.alert(
                  '회원 탈퇴가 완료되었습니다.',
                  'NETS서비스를 이용해주셔서 감사합니다.',
                  [{text: '확인', style: 'cancel'}],
                );
                DeleteToken();
                setRefresh(null);
                navigation.navigate('Home');
              } else if (res.status === 400) {
                setErrmsg(res.data.false);
              } else {
                setErrmsg('죄송합니다. 회원탈퇴에 실패하셨습니다.');
              }
            }}
            disabled={disable}
          />
        </View>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default Withdrawal;

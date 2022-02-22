import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {btnStyles} from '../../../components/common/button';
import {
  ChangeInput,
  ChangeInputWithBtn,
} from '../../../components/mypage/changeInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 30,
    marginBottom: 30,
  },
  setcenter: {
    alignItems: 'center',
  },
  savebtn: {
    width: 300,
    height: 47,
  },
  wrapbtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

const ChangeInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
          />
          <ChangeInputWithBtn
            title={'휴대전화'}
            place1={'휴대전화'}
            Text1={phone}
            setText1={setPhone}
            btntext={'중복확인'}
          />
        </View>
        <View style={styles.wrapbtn}>
          <View>
            <TouchableOpacity>
              <View style={[btnStyles.btnDisable, styles.savebtn]}>
                <Text
                  style={[
                    typoStyles.fs20,
                    typoStyles.fwBold,
                    typoStyles.textWhite,
                  ]}>
                  변경 정보 저장
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default ChangeInfo;

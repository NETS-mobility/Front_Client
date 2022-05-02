import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import BlueBlock from '../../../components/mypage/blueBlock';
import {ArrowBtn} from '../../../components/mypage/arrowBtn';
import {btnStyles} from '../../../components/common/button';
import {DeleteToken} from '../../../utils/controlToken';
import GetUserInfo from '../../../api/mypage/getUserInfo';
import {useIsFocused} from '@react-navigation/native';
import {RefreshContext} from '../../../../App';

const styles = StyleSheet.create({
  title: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  logoutbtn: {
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changebtn: {
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setcenter: {
    alignItems: 'center',
  },
  usertext: {
    color: 'black',
  },
  infoalign: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowset: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

const MypageMain = ({navigation}) => {
  const isFocused = useIsFocused();
  const [result, setResult] = useState();
  const {refresh, setRefresh} = useContext(RefreshContext);

  useEffect(() => {
    async function fetchData() {
      setResult(
        await GetUserInfo()
          .then(res => res)
          .catch(err => err),
      );
    }
    fetchData();
  }, [isFocused]);

  useEffect(() => {
    console.log('result===', result);
  }, [result]);

  return (
    <CommonLayout>
      <SafeAreaView>
        <View style={styles.setcenter}>
          <View style={styles.title}>
            <Text
              style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
              마이페이지
            </Text>
            <TouchableOpacity
              onPress={() => {
                DeleteToken();
                setRefresh(null);
                navigation.navigate('Home');
              }}>
              <View style={[btnStyles.btnBlue, styles.logoutbtn]}>
                <Text
                  style={[
                    typoStyles.fs14,
                    typoStyles.fwBold,
                    typoStyles.textWhite,
                  ]}>
                  로그아웃
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <BlueBlock>
          <View style={styles.setcenter}>
            <View style={styles.infoalign}>
              <Text
                style={[typoStyles.fs20, typoStyles.fwBold, styles.usertext]}>
                {result?.name} 고객님
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('ChangeInfo', {data: result});
                }}>
                <View style={[btnStyles.btnBlue, styles.changebtn]}>
                  <Text
                    style={[
                      typoStyles.fs14,
                      typoStyles.fwBold,
                      typoStyles.textWhite,
                    ]}>
                    내 정보 수정
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BlueBlock>
        <View style={styles.arrowset}>
          <ArrowBtn contents={'비밀번호 변경'} />
          <ArrowBtn
            contents={'자주 묻는 질문'}
            onPress={() => navigation.navigate('FAQ')}
          />
          <ArrowBtn contents={'공지사항'} />
          <ArrowBtn contents={'예약 변경 및 취소 수수료 안내'} />
          <ArrowBtn contents={'약관 상세 확인'} />
        </View>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default MypageMain;

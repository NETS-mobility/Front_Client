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
    height: '60%',
    justifyContent: 'flex-start',
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
              ???????????????
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
                  ????????????
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
                {result?.name} ?????????
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
                    ??? ?????? ??????
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </BlueBlock>
        <View style={styles.arrowset}>
          <ArrowBtn contents={'???????????? ??????'} />
          <ArrowBtn
            contents={'?????? ?????? ??????'}
            onPress={() => navigation.navigate('FAQ')}
          />
          {/* <ArrowBtn contents={'????????????'} />
          <ArrowBtn contents={'?????? ?????? ??? ?????? ????????? ??????'} /> */}
          <ArrowBtn
            contents={'?????? ?????? ??????'}
            onPress={() => navigation.navigate('Clause')}
          />
          <ArrowBtn
            contents={'?????? ??????'}
            onPress={() => navigation.navigate('Withdrawal')}
          />
        </View>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default MypageMain;

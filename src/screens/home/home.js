import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {btnStyles, shadowStyles} from '../../components/common/button';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../../components/common/layout';
import {
  NoticeBlock,
  NoTokenNoticeBlock,
} from '../../components/home/noticeBlock';
import {RefreshContext} from '../../../App';
import GetHomeInfo from '../../api/home/GetHomeInfo';
import {useIsFocused} from '@react-navigation/native';
import GetNewToken from '../../api/auth/GetNewToken';
import NetsHowToUseImg from '../../assets/image/nets_howtouse.jpeg';
import {CheckWaitPay} from '../../api/reservation/checkWaitPay';

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const {refresh, setRefresh} = useContext(RefreshContext);
  const styles = StyleSheet.create({
    img: {
      position: 'relative',
      width: '100%',
      height: 200,
    },
    imgBox: {
      position: 'absolute',
      top: 57,
      width: '100%',
      height: 200,
      backgroundColor: '#19B7CD',
      opacity: 0.38,
    },
    title: {
      position: 'absolute',
      top: 115,
      left: 36,
    },
    text: {
      marginBottom: 30,
    },
    btn: {
      width: 328,
      height: 47,
      alignSelf: 'center',
      marginBottom: 20,
    },
    howTo: {
      width: '100%',
      height: 347,
      backgroundColor: '#c4c4c4',
      justifyContent: 'center',
    },
    useimg: {
      width: '100%',
      height: 600,
    },
    tempTxt: {
      textAlign: 'center',
    },
  });

  const [res, setRes] = useState([]);

  const GetHomeNoti = async () => {
    setRes(await GetHomeInfo());
  };

  useEffect(() => {
    GetHomeNoti();
  }, [isFocused]);

  return (
    <CommonLayout>
      <Image
        source={require('../../assets/image/startimg2.png')}
        style={styles.img}
      />
      <View style={styles.imgBox}></View>
      <Text
        style={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textWhite,
          styles.title,
        ]}>
        {`??????\n????????????`}
      </Text>
      <ScrollView>
        {refresh != null ? (
          <NoticeBlock data={res} navigation={navigation} />
        ) : (
          <NoTokenNoticeBlock />
        )}
        <TouchableOpacity
          style={[shadowStyles.shadow, btnStyles.btnBlue, styles.btn]}
          onPress={async () => {
            const check = await CheckWaitPay();
            if (check === undefined) {
              const res = await GetNewToken();
              if (refresh != null && res) {
                console.log('??????');
                navigation.push('ReservationMainScreen');
              } else {
                console.log('?????????');
                navigation.push('LoginMain');
              }
            } else {
              Alert.alert(
                '????????? ????????? ????????????.',
                `????????? ???????????? ?????? ????????? ????????????. ????????? ???????????? ??? ????????? ????????? ???????????????.\n??? ?????? ????????? ??????: ${check}`,
                [{text: '??????', style: 'cancel'}],
              );
            }
          }}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            ???????????? ????????? ????????????
          </Text>
        </TouchableOpacity>

        <Image
          source={NetsHowToUseImg}
          style={styles.useimg}
          resizeMode={'contain'}
        />
      </ScrollView>
    </CommonLayout>
  );
};
export default Home;

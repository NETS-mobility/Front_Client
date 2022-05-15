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
        {`네츠\n모빌리티`}
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
                console.log('여기');
                navigation.push('ReservationMainScreen');
              } else {
                console.log('이렇게');
                navigation.push('LoginMain');
              }
            } else {
              Alert.alert(
                '미결제 예약이 있습니다.',
                `이전에 결제되지 않은 예약이 있습니다. 결제를 완료하신 후 서비스 예약이 가능합니다.\n미 결제 서비스 번호: ${check}`,
                [{text: '확인', style: 'cancel'}],
              );
            }
          }}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            클릭해서 서비스 예약하기
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
